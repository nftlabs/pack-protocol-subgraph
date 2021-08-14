import { BigInt } from "@graphprotocol/graph-ts";

import {
  PackCreated,
  TransferSingle,
  TransferBatch,
  PackOpenFulfilled,
} from "../generated/Pack/Pack";
import { ERC1155 } from "../generated/Pack/ERC1155";

import {
  Account,
  Pack,
  PackOwnership,
  PackReward,
  PackRewardOwnership,
} from "../generated/schema";

const zeroAddress: string = "0x0000000000000000000000000000000000000000";

/**
 *
 * @param event PackCreated(address indexed rewardContract, address indexed creator, PackState packState, Rewards rewards)
 */
export function handlePackCreated(event: PackCreated): void {
  // Update `Account` for creator
  let creatorAccountId = event.params.creator.toHexString();
  let creatorAccount = Account.load(creatorAccountId);

  if (creatorAccount == null) {
    let creator = new Account(creatorAccountId);
    creator.save();
  }

  // Create `Pack`
  let packId = event.params.packState.packId.toString();
  let pack = new Pack(packId);

  pack.packId = event.params.packState.packId;
  pack.creator = creatorAccountId;
  pack.uri = event.params.packState.uri;
  pack.supply = event.params.packState.currentSupply;
  pack.openStartTimestamp = event.params.packState.openStart;
  pack.openEndTimestamp = event.params.packState.openEnd;
  pack.rewardContract = event.params.rewardContract;

  pack.save();

  let rewards = event.params.rewards;
  for (let i = 0; i < rewards.tokenIds.length; i++) {
    const source = rewards.source;
    const tokenId = rewards.tokenIds[i];
    const amountsPacked = rewards.amountsPacked[i];
    const packRewardId = `${packId}-${source.toString()}-${tokenId.toString()}`;
    const rewardId = `${source.toString()}-${tokenId.toString()}`;

    const packReward = new PackReward(packRewardId);
    packReward.reward = rewardId;
    packReward.supply = amountsPacked;
    packReward.pack = packId;
    packReward.tokenId = tokenId;
    packReward.uri = ERC1155.bind(source).uri(tokenId);
    packReward.save();
  }
}

/**
 *
 * @param event PackOpenFulfilled(uint indexed packId, address indexed opener, bytes32 requestId, address indexed rewardContract, uint rewardId);
 */
export function handlePackOpenFulfilled(event: PackOpenFulfilled): void {
  const packId = event.params.packId.toString();
  const rewardId = event.params.rewardId.toString();
  const rewardContract = event.params.rewardContract;

  const accountId = event.params.opener.toHexString();
  let account = Account.load(accountId);
  if (account == null) {
    account = new Account(accountId);
    account.save();
  }

  const pack = Pack.load(packId);
  if (pack) {
    const packRewardId = `${packId}-${rewardContract.toString()}-${rewardId.toString()}`;
    const packReward = PackReward.load(packRewardId);
    if (packReward) {
      packReward.supply = packReward.supply.minus(BigInt.fromI32(1));
      packReward.save();
    }
  }
}

/**
 *
 * @param event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
 */
export function handleTransferSingle(event: TransferSingle): void {
  // Get pack tokenId
  let packId = event.params.id.toString();

  if (event.params.from.toHexString() != zeroAddress) {
    // Update `PackOwnership` for sender
    let senderOwnershipId = event.params.from.toHexString() + packId;
    let senderOwnership = PackOwnership.load(senderOwnershipId);

    if (senderOwnership == null) {
      senderOwnership = new PackOwnership(senderOwnershipId);

      senderOwnership.owner = event.params.from.toHexString();
      senderOwnership.pack = packId;
    }

    senderOwnership.balance = senderOwnership.balance.minus(event.params.value);

    senderOwnership.save();
  }

  if (event.params.to.toHexString() == zeroAddress) {
    // Update `Pack` supply
    let pack = Pack.load(packId);
    pack.supply = pack.supply.minus(event.params.value);
    pack.save();
  } else {
    // Create `Account` for receiver if it doesn't exist.
    let receiverAccountId = event.params.to.toHexString();
    let receiverAccount = Account.load(receiverAccountId);

    if (receiverAccount == null) {
      receiverAccount = new Account(receiverAccountId);
      receiverAccount.save();
    }

    // Update `PackOwnership` for receiver
    let receiverOwnershipId = receiverAccountId + packId;
    let receiverOwnership = PackOwnership.load(receiverOwnershipId);

    if (receiverOwnership == null) {
      receiverOwnership = new PackOwnership(receiverOwnershipId);

      receiverOwnership.owner = event.params.to.toHexString();
      receiverOwnership.balance = event.params.value;
      receiverOwnership.pack = packId;
    } else {
      receiverOwnership.balance = receiverOwnership.balance.plus(
        event.params.value
      );
    }

    receiverOwnership.save();
  }
}

/**
 *
 * @param event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
 */
export function handleTransferBatch(event: TransferBatch): void {
  let packIds = event.params.ids;
  let values = event.params.values;

  // Create `Account` for receiver if it doesn't exist.
  let receiverAccountId = event.params.to.toHexString();
  let receiverAccount = Account.load(receiverAccountId);

  if (receiverAccount == null) {
    receiverAccount = new Account(receiverAccountId);
    receiverAccount.save();
  }

  for (let i = 0; i < packIds.length; i++) {
    // Get pack tokenId
    let packId = packIds[i].toString();

    if (event.params.from.toHexString() != zeroAddress) {
      // Update `PackOwnership` for sender
      let senderOwnershipId = event.params.from.toHexString() + packId;
      let senderOwnership = PackOwnership.load(senderOwnershipId);

      if (senderOwnership == null) {
        senderOwnership = new PackOwnership(senderOwnershipId);

        senderOwnership.owner = event.params.from.toHexString();
        senderOwnership.pack = packId;
      }

      senderOwnership.balance = senderOwnership.balance.minus(values[i]);

      senderOwnership.save();
    }

    if (event.params.to.toHexString() == zeroAddress) {
      // Update `Pack` supply
      let pack = Pack.load(packId);
      pack.supply = pack.supply.minus(values[i]);
      pack.save();
    } else {
      // Update `PackOwnership` for receiver
      let receiverOwnershipId = event.params.to.toHexString() + packId;
      let receiverOwnership = PackOwnership.load(receiverOwnershipId);

      if (receiverOwnership == null) {
        receiverOwnership = new PackOwnership(receiverOwnershipId);

        receiverOwnership.owner = event.params.to.toHexString();
        receiverOwnership.balance = values[i];
        receiverOwnership.pack = packId;
      } else {
        receiverOwnership.balance = receiverOwnership.balance.plus(values[i]);
      }

      receiverOwnership.save();
    }
  }
}

