export declare const Events: {
    on: (types: any, fn: any, context: any) => any;
    off: (types: any, fn: any, context: any) => any;
    _on: (type: any, fn: any, context: any) => void;
    _off: (type: any, fn: any, context: any) => void;
    fire: (type: any, data: any, propagate: any) => any;
    listens: (type: any, propagate: any) => boolean;
    once: (types: any, fn: any, context: any) => any;
    addEventParent: (obj: any) => any;
    removeEventParent: (obj: any) => any;
    _propagateEvent: (e: any) => void;
};
export declare const Evented: any;
