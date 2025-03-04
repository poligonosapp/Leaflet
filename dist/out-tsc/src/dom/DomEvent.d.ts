export declare function on(obj: any, types: any, fn: any, context: any): any;
export declare function off(obj: any, types: any, fn: any, context: any): any;
export declare function stopPropagation(e: any): any;
export declare function disableScrollPropagation(el: any): any;
export declare function disableClickPropagation(el: any): any;
export declare function preventDefault(e: any): any;
export declare function stop(e: any): any;
export declare function getMousePosition(e: any, container: any): any;
export declare function getWheelDelta(e: any): number;
export declare function fakeStop(e: any): void;
export declare function skipped(e: any): any;
export declare function isExternalTarget(el: any, e: any): boolean;
export { on as addListener };
export { off as removeListener };
