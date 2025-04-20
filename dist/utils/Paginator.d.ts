export declare function Paginator(initialPage?: number): {
    pagination: {
        initialPage: number;
        calcTRPC: (dataLength: number, limit: number, pageCursor: number) => {
            hasNextPage: boolean;
            nextPage: number | null;
        };
        calcPrisma: (limit: number, pageCursor: number) => {
            skip: number;
            take: number;
        };
    };
};
