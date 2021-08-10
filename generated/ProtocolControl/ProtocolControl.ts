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

export class FundsTransferred extends ethereum.Event {
  get params(): FundsTransferred__Params {
    return new FundsTransferred__Params(this);
  }
}

export class FundsTransferred__Params {
  _event: FundsTransferred;

  constructor(event: FundsTransferred) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ModuleInitialized extends ethereum.Event {
  get params(): ModuleInitialized__Params {
    return new ModuleInitialized__Params(this);
  }
}

export class ModuleInitialized__Params {
  _event: ModuleInitialized;

  constructor(event: ModuleInitialized) {
    this._event = event;
  }

  get moduleId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get module(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ModuleUpdated extends ethereum.Event {
  get params(): ModuleUpdated__Params {
    return new ModuleUpdated__Params(this);
  }
}

export class ModuleUpdated__Params {
  _event: ModuleUpdated;

  constructor(event: ModuleUpdated) {
    this._event = event;
  }

  get moduleId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get module(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SystemPaused extends ethereum.Event {
  get params(): SystemPaused__Params {
    return new SystemPaused__Params(this);
  }
}

export class SystemPaused__Params {
  _event: SystemPaused;

  constructor(event: SystemPaused) {
    this._event = event;
  }

  get isPaused(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class ProtocolControl extends ethereum.SmartContract {
  static bind(address: Address): ProtocolControl {
    return new ProtocolControl("ProtocolControl", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MARKET(): Bytes {
    let result = super.call("MARKET", "MARKET():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MARKET(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MARKET", "MARKET():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PACK(): Bytes {
    let result = super.call("PACK", "PACK():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PACK(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PACK", "PACK():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PROTOCOL_ADMIN(): Bytes {
    let result = super.call("PROTOCOL_ADMIN", "PROTOCOL_ADMIN():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PROTOCOL_ADMIN(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PROTOCOL_ADMIN",
      "PROTOCOL_ADMIN():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  modules(param0: Bytes): Address {
    let result = super.call("modules", "modules(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_modules(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("modules", "modules(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  systemPaused(): boolean {
    let result = super.call("systemPaused", "systemPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_systemPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("systemPaused", "systemPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeProtocolCall extends ethereum.Call {
  get inputs(): InitializeProtocolCall__Inputs {
    return new InitializeProtocolCall__Inputs(this);
  }

  get outputs(): InitializeProtocolCall__Outputs {
    return new InitializeProtocolCall__Outputs(this);
  }
}

export class InitializeProtocolCall__Inputs {
  _call: InitializeProtocolCall;

  constructor(call: InitializeProtocolCall) {
    this._call = call;
  }

  get _pack(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _market(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeProtocolCall__Outputs {
  _call: InitializeProtocolCall;

  constructor(call: InitializeProtocolCall) {
    this._call = call;
  }
}

export class PausePackProtocolCall extends ethereum.Call {
  get inputs(): PausePackProtocolCall__Inputs {
    return new PausePackProtocolCall__Inputs(this);
  }

  get outputs(): PausePackProtocolCall__Outputs {
    return new PausePackProtocolCall__Outputs(this);
  }
}

export class PausePackProtocolCall__Inputs {
  _call: PausePackProtocolCall;

  constructor(call: PausePackProtocolCall) {
    this._call = call;
  }

  get _toPause(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class PausePackProtocolCall__Outputs {
  _call: PausePackProtocolCall;

  constructor(call: PausePackProtocolCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class TransferProtocolFundsCall extends ethereum.Call {
  get inputs(): TransferProtocolFundsCall__Inputs {
    return new TransferProtocolFundsCall__Inputs(this);
  }

  get outputs(): TransferProtocolFundsCall__Outputs {
    return new TransferProtocolFundsCall__Outputs(this);
  }
}

export class TransferProtocolFundsCall__Inputs {
  _call: TransferProtocolFundsCall;

  constructor(call: TransferProtocolFundsCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferProtocolFundsCall__Outputs {
  _call: TransferProtocolFundsCall;

  constructor(call: TransferProtocolFundsCall) {
    this._call = call;
  }
}

export class UpdateModuleCall extends ethereum.Call {
  get inputs(): UpdateModuleCall__Inputs {
    return new UpdateModuleCall__Inputs(this);
  }

  get outputs(): UpdateModuleCall__Outputs {
    return new UpdateModuleCall__Outputs(this);
  }
}

export class UpdateModuleCall__Inputs {
  _call: UpdateModuleCall;

  constructor(call: UpdateModuleCall) {
    this._call = call;
  }

  get _moduleId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _newModuleAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateModuleCall__Outputs {
  _call: UpdateModuleCall;

  constructor(call: UpdateModuleCall) {
    this._call = call;
  }
}
