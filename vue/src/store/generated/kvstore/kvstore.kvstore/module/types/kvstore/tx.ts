/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "kvstore.kvstore";

export interface MsgWriteKey {
  creator: string;
  key: string;
  value: string;
}

export interface MsgWriteKeyResponse {}

export interface MsgDeleteKey {
  creator: string;
  key: string;
}

export interface MsgDeleteKeyResponse {}

export interface MsgReadKey {
  creator: string;
  key: string;
}

export interface MsgReadKeyResponse {
  value: string;
}

const baseMsgWriteKey: object = { creator: "", key: "", value: "" };

export const MsgWriteKey = {
  encode(message: MsgWriteKey, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWriteKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWriteKey } as MsgWriteKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWriteKey {
    const message = { ...baseMsgWriteKey } as MsgWriteKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgWriteKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWriteKey>): MsgWriteKey {
    const message = { ...baseMsgWriteKey } as MsgWriteKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgWriteKeyResponse: object = {};

export const MsgWriteKeyResponse = {
  encode(_: MsgWriteKeyResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWriteKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWriteKeyResponse } as MsgWriteKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWriteKeyResponse {
    const message = { ...baseMsgWriteKeyResponse } as MsgWriteKeyResponse;
    return message;
  },

  toJSON(_: MsgWriteKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWriteKeyResponse>): MsgWriteKeyResponse {
    const message = { ...baseMsgWriteKeyResponse } as MsgWriteKeyResponse;
    return message;
  },
};

const baseMsgDeleteKey: object = { creator: "", key: "" };

export const MsgDeleteKey = {
  encode(message: MsgDeleteKey, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKey } as MsgDeleteKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKey {
    const message = { ...baseMsgDeleteKey } as MsgDeleteKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteKey>): MsgDeleteKey {
    const message = { ...baseMsgDeleteKey } as MsgDeleteKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseMsgDeleteKeyResponse: object = {};

export const MsgDeleteKeyResponse = {
  encode(_: MsgDeleteKeyResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKeyResponse } as MsgDeleteKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKeyResponse {
    const message = { ...baseMsgDeleteKeyResponse } as MsgDeleteKeyResponse;
    return message;
  },

  toJSON(_: MsgDeleteKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteKeyResponse>): MsgDeleteKeyResponse {
    const message = { ...baseMsgDeleteKeyResponse } as MsgDeleteKeyResponse;
    return message;
  },
};

const baseMsgReadKey: object = { creator: "", key: "" };

export const MsgReadKey = {
  encode(message: MsgReadKey, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadKey } as MsgReadKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReadKey {
    const message = { ...baseMsgReadKey } as MsgReadKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: MsgReadKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReadKey>): MsgReadKey {
    const message = { ...baseMsgReadKey } as MsgReadKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseMsgReadKeyResponse: object = { value: "" };

export const MsgReadKeyResponse = {
  encode(
    message: MsgReadKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadKeyResponse } as MsgReadKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReadKeyResponse {
    const message = { ...baseMsgReadKeyResponse } as MsgReadKeyResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgReadKeyResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReadKeyResponse>): MsgReadKeyResponse {
    const message = { ...baseMsgReadKeyResponse } as MsgReadKeyResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  WriteKey(request: MsgWriteKey): Promise<MsgWriteKeyResponse>;
  DeleteKey(request: MsgDeleteKey): Promise<MsgDeleteKeyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ReadKey(request: MsgReadKey): Promise<MsgReadKeyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  WriteKey(request: MsgWriteKey): Promise<MsgWriteKeyResponse> {
    const data = MsgWriteKey.encode(request).finish();
    const promise = this.rpc.request("kvstore.kvstore.Msg", "WriteKey", data);
    return promise.then((data) => MsgWriteKeyResponse.decode(new Reader(data)));
  }

  DeleteKey(request: MsgDeleteKey): Promise<MsgDeleteKeyResponse> {
    const data = MsgDeleteKey.encode(request).finish();
    const promise = this.rpc.request("kvstore.kvstore.Msg", "DeleteKey", data);
    return promise.then((data) =>
      MsgDeleteKeyResponse.decode(new Reader(data))
    );
  }

  ReadKey(request: MsgReadKey): Promise<MsgReadKeyResponse> {
    const data = MsgReadKey.encode(request).finish();
    const promise = this.rpc.request("kvstore.kvstore.Msg", "ReadKey", data);
    return promise.then((data) => MsgReadKeyResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
