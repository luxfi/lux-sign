export declare function convertToString(ptr: number, len: number, { freeptr }?: {
    freeptr?: boolean;
}): string;
export declare function convertFromString(str?: string, { nullTerminated, ptr }?: {
    nullTerminated?: boolean;
    ptr?: number;
}): Uint8Array;
export declare function allocateMemByWasm(size: number): Uint8Array;
export declare function initAsync(hf?: string): Promise<any>;
export declare function getWasmReady(): any;
