import { ISignOpts } from './constant';
/**
 * @alias makeNonceWasm
 */
export declare function mNW(len?: number): string;
/**
 * @alias cattleSignFull
 */
export declare function cattleSF(m: string, u: string, params: Record<string, any> | string, n: string, t: number | string): string;
export declare function cattleGsW(params: Record<string | number, any>, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', uripath: string, opts?: ISignOpts): {
    signature: string;
    nonce: string;
    ts: number;
    version: "v2";
};
