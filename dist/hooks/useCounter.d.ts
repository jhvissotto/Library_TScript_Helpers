export declare function useCounter({ initial }: {
    initial?: number | undefined;
}): {
    value: number;
    setValue: import("react").Dispatch<import("react").SetStateAction<number>>;
    reset: () => void;
    increment: () => void;
    decrement: () => void;
};
