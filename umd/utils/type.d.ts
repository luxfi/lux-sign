export declare type ItOrItsPromise<T> = T extends Promise<any> ? T : Promise<T>;
export declare type ItsGenerator<T, ARGS extends any[] = any[]> = T extends Function ? T : ((...args: ARGS) => T);
