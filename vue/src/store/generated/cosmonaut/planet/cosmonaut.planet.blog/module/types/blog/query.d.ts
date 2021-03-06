import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../blog/params";
import { Post } from "../blog/post";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { SentPost } from "../blog/sent_post";
import { TimedoutPost } from "../blog/timedout_post";
export declare const protobufPackage = "cosmonaut.planet.blog";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetPostRequest {
    id: number;
}
export interface QueryGetPostResponse {
    Post: Post | undefined;
}
export interface QueryAllPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPostResponse {
    Post: Post[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSentPostRequest {
    id: number;
}
export interface QueryGetSentPostResponse {
    SentPost: SentPost | undefined;
}
export interface QueryAllSentPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSentPostResponse {
    SentPost: SentPost[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTimedoutPostRequest {
    id: number;
}
export interface QueryGetTimedoutPostResponse {
    TimedoutPost: TimedoutPost | undefined;
}
export interface QueryAllTimedoutPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimedoutPostResponse {
    TimedoutPost: TimedoutPost[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
};
export declare const QueryGetSentPostRequest: {
    encode(message: QueryGetSentPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPostRequest;
    fromJSON(object: any): QueryGetSentPostRequest;
    toJSON(message: QueryGetSentPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPostRequest>): QueryGetSentPostRequest;
};
export declare const QueryGetSentPostResponse: {
    encode(message: QueryGetSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentPostResponse;
    fromJSON(object: any): QueryGetSentPostResponse;
    toJSON(message: QueryGetSentPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentPostResponse>): QueryGetSentPostResponse;
};
export declare const QueryAllSentPostRequest: {
    encode(message: QueryAllSentPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPostRequest;
    fromJSON(object: any): QueryAllSentPostRequest;
    toJSON(message: QueryAllSentPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPostRequest>): QueryAllSentPostRequest;
};
export declare const QueryAllSentPostResponse: {
    encode(message: QueryAllSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentPostResponse;
    fromJSON(object: any): QueryAllSentPostResponse;
    toJSON(message: QueryAllSentPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentPostResponse>): QueryAllSentPostResponse;
};
export declare const QueryGetTimedoutPostRequest: {
    encode(message: QueryGetTimedoutPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutPostRequest;
    fromJSON(object: any): QueryGetTimedoutPostRequest;
    toJSON(message: QueryGetTimedoutPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutPostRequest>): QueryGetTimedoutPostRequest;
};
export declare const QueryGetTimedoutPostResponse: {
    encode(message: QueryGetTimedoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutPostResponse;
    fromJSON(object: any): QueryGetTimedoutPostResponse;
    toJSON(message: QueryGetTimedoutPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutPostResponse>): QueryGetTimedoutPostResponse;
};
export declare const QueryAllTimedoutPostRequest: {
    encode(message: QueryAllTimedoutPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutPostRequest;
    fromJSON(object: any): QueryAllTimedoutPostRequest;
    toJSON(message: QueryAllTimedoutPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutPostRequest>): QueryAllTimedoutPostRequest;
};
export declare const QueryAllTimedoutPostResponse: {
    encode(message: QueryAllTimedoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutPostResponse;
    fromJSON(object: any): QueryAllTimedoutPostResponse;
    toJSON(message: QueryAllTimedoutPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutPostResponse>): QueryAllTimedoutPostResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Post by id. */
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    /** Queries a list of Post items. */
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
    /** Queries a SentPost by id. */
    SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
    /** Queries a list of SentPost items. */
    SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse>;
    /** Queries a TimedoutPost by id. */
    TimedoutPost(request: QueryGetTimedoutPostRequest): Promise<QueryGetTimedoutPostResponse>;
    /** Queries a list of TimedoutPost items. */
    TimedoutPostAll(request: QueryAllTimedoutPostRequest): Promise<QueryAllTimedoutPostResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
    SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
    SentPostAll(request: QueryAllSentPostRequest): Promise<QueryAllSentPostResponse>;
    TimedoutPost(request: QueryGetTimedoutPostRequest): Promise<QueryGetTimedoutPostResponse>;
    TimedoutPostAll(request: QueryAllTimedoutPostRequest): Promise<QueryAllTimedoutPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
