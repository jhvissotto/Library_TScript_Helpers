export declare class Counter {
    private initial;
    private value;
    constructor({ initial }: {
        initial?: number | undefined;
    });
    reset(): void;
    increment(): void;
    decrement(): void;
    getValue(): number;
}
