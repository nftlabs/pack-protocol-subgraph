// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ERC20Redeemed extends ethereum.Event {
  get params(): ERC20Redeemed__Params {
    return new ERC20Redeemed__Params(this);
  }
}

export class ERC20Redeemed__Params {
  _event: ERC20Redeemed;

  constructor(event: ERC20Redeemed) {
    this._event = event;
  }

  get redeemer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAmountReceived(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardAmountRedeemed(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ERC20Rewards extends ethereum.Event {
  get params(): ERC20Rewards__Params {
    return new ERC20Rewards__Params(this);
  }
}

export class ERC20Rewards__Params {
  _event: ERC20Rewards;

  constructor(event: ERC20Rewards) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardsMinted(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get rewardURI(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class ERC721Redeemed extends ethereum.Event {
  get params(): ERC721Redeemed__Params {
    return new ERC721Redeemed__Params(this);
  }
}

export class ERC721Redeemed__Params {
  _event: ERC721Redeemed;

  constructor(event: ERC721Redeemed) {
    this._event = event;
  }

  get redeemer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nftTokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardTokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ERC721Rewards extends ethereum.Event {
  get params(): ERC721Rewards__Params {
    return new ERC721Rewards__Params(this);
  }
}

export class ERC721Rewards__Params {
  _event: ERC721Rewards;

  constructor(event: ERC721Rewards) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nftTokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardTokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get rewardURI(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class NativeRewards extends ethereum.Event {
  get params(): NativeRewards__Params {
    return new NativeRewards__Params(this);
  }
}

export class NativeRewards__Params {
  _event: NativeRewards;

  constructor(event: NativeRewards) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get rewardURIs(): Array<string> {
    return this._event.parameters[2].value.toStringArray();
  }

  get rewardSupplies(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Reward__erc20RewardsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Reward__erc721RewardsResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Reward__rewardsResult {
  value0: Address;
  value1: string;
  value2: BigInt;
  value3: i32;

  constructor(value0: Address, value1: string, value2: BigInt, value3: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    return map;
  }
}

export class Reward extends ethereum.SmartContract {
  static bind(address: Address): Reward {
    return new Reward("Reward", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  createNativeRewards(
    _rewardURIs: Array<string>,
    _rewardSupplies: Array<BigInt>
  ): Array<BigInt> {
    let result = super.call(
      "createNativeRewards",
      "createNativeRewards(string[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromStringArray(_rewardURIs),
        ethereum.Value.fromUnsignedBigIntArray(_rewardSupplies)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_createNativeRewards(
    _rewardURIs: Array<string>,
    _rewardSupplies: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "createNativeRewards",
      "createNativeRewards(string[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromStringArray(_rewardURIs),
        ethereum.Value.fromUnsignedBigIntArray(_rewardSupplies)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  creator(_rewardId: BigInt): Address {
    let result = super.call("creator", "creator(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);

    return result[0].toAddress();
  }

  try_creator(_rewardId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("creator", "creator(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc20Rewards(param0: BigInt): Reward__erc20RewardsResult {
    let result = super.call(
      "erc20Rewards",
      "erc20Rewards(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Reward__erc20RewardsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_erc20Rewards(
    param0: BigInt
  ): ethereum.CallResult<Reward__erc20RewardsResult> {
    let result = super.tryCall(
      "erc20Rewards",
      "erc20Rewards(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Reward__erc20RewardsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  erc721Rewards(param0: BigInt): Reward__erc721RewardsResult {
    let result = super.call(
      "erc721Rewards",
      "erc721Rewards(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Reward__erc721RewardsResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_erc721Rewards(
    param0: BigInt
  ): ethereum.CallResult<Reward__erc721RewardsResult> {
    let result = super.tryCall(
      "erc721Rewards",
      "erc721Rewards(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Reward__erc721RewardsResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nextTokenId(): BigInt {
    let result = super.call("nextTokenId", "nextTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextTokenId", "nextTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pack(): Address {
    let result = super.call("pack", "pack():(address)", []);

    return result[0].toAddress();
  }

  try_pack(): ethereum.CallResult<Address> {
    let result = super.tryCall("pack", "pack():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewards(param0: BigInt): Reward__rewardsResult {
    let result = super.call(
      "rewards",
      "rewards(uint256):(address,string,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Reward__rewardsResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toI32()
    );
  }

  try_rewards(param0: BigInt): ethereum.CallResult<Reward__rewardsResult> {
    let result = super.tryCall(
      "rewards",
      "rewards(uint256):(address,string,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Reward__rewardsResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toI32()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenURI(_rewardId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_rewardId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  uri(_rewardId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);

    return result[0].toString();
  }

  try_uri(_rewardId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_rewardId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _pack(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateNativeRewardsCall extends ethereum.Call {
  get inputs(): CreateNativeRewardsCall__Inputs {
    return new CreateNativeRewardsCall__Inputs(this);
  }

  get outputs(): CreateNativeRewardsCall__Outputs {
    return new CreateNativeRewardsCall__Outputs(this);
  }
}

export class CreateNativeRewardsCall__Inputs {
  _call: CreateNativeRewardsCall;

  constructor(call: CreateNativeRewardsCall) {
    this._call = call;
  }

  get _rewardURIs(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _rewardSupplies(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class CreateNativeRewardsCall__Outputs {
  _call: CreateNativeRewardsCall;

  constructor(call: CreateNativeRewardsCall) {
    this._call = call;
  }

  get rewardIds(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class CreatePackAtomicCall extends ethereum.Call {
  get inputs(): CreatePackAtomicCall__Inputs {
    return new CreatePackAtomicCall__Inputs(this);
  }

  get outputs(): CreatePackAtomicCall__Outputs {
    return new CreatePackAtomicCall__Outputs(this);
  }
}

export class CreatePackAtomicCall__Inputs {
  _call: CreatePackAtomicCall;

  constructor(call: CreatePackAtomicCall) {
    this._call = call;
  }

  get _rewardURIs(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _rewardSupplies(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _packURI(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _secondsUntilOpenStart(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _secondsUntilOpenEnd(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _rewardsPerOpen(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreatePackAtomicCall__Outputs {
  _call: CreatePackAtomicCall;

  constructor(call: CreatePackAtomicCall) {
    this._call = call;
  }
}

export class RedeemERC20Call extends ethereum.Call {
  get inputs(): RedeemERC20Call__Inputs {
    return new RedeemERC20Call__Inputs(this);
  }

  get outputs(): RedeemERC20Call__Outputs {
    return new RedeemERC20Call__Outputs(this);
  }
}

export class RedeemERC20Call__Inputs {
  _call: RedeemERC20Call;

  constructor(call: RedeemERC20Call) {
    this._call = call;
  }

  get _rewardId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemERC20Call__Outputs {
  _call: RedeemERC20Call;

  constructor(call: RedeemERC20Call) {
    this._call = call;
  }
}

export class RedeemERC721Call extends ethereum.Call {
  get inputs(): RedeemERC721Call__Inputs {
    return new RedeemERC721Call__Inputs(this);
  }

  get outputs(): RedeemERC721Call__Outputs {
    return new RedeemERC721Call__Outputs(this);
  }
}

export class RedeemERC721Call__Inputs {
  _call: RedeemERC721Call;

  constructor(call: RedeemERC721Call) {
    this._call = call;
  }

  get _rewardId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemERC721Call__Outputs {
  _call: RedeemERC721Call;

  constructor(call: RedeemERC721Call) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WrapERC20Call extends ethereum.Call {
  get inputs(): WrapERC20Call__Inputs {
    return new WrapERC20Call__Inputs(this);
  }

  get outputs(): WrapERC20Call__Outputs {
    return new WrapERC20Call__Outputs(this);
  }
}

export class WrapERC20Call__Inputs {
  _call: WrapERC20Call;

  constructor(call: WrapERC20Call) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _numOfRewardsToMint(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _rewardURI(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class WrapERC20Call__Outputs {
  _call: WrapERC20Call;

  constructor(call: WrapERC20Call) {
    this._call = call;
  }
}

export class WrapERC721Call extends ethereum.Call {
  get inputs(): WrapERC721Call__Inputs {
    return new WrapERC721Call__Inputs(this);
  }

  get outputs(): WrapERC721Call__Outputs {
    return new WrapERC721Call__Outputs(this);
  }
}

export class WrapERC721Call__Inputs {
  _call: WrapERC721Call;

  constructor(call: WrapERC721Call) {
    this._call = call;
  }

  get _nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _rewardURI(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class WrapERC721Call__Outputs {
  _call: WrapERC721Call;

  constructor(call: WrapERC721Call) {
    this._call = call;
  }
}
