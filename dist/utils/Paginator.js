export function Paginator(initialPage = 1) {
    function calcPrisma(limit, pageCursor) {
        return {
            skip: limit * (pageCursor - 1),
            take: limit,
        };
    }
    function calcTRPC(dataLength, limit, pageCursor) {
        const hasNextPage = (dataLength === limit);
        const nextPage = hasNextPage ? pageCursor + 1 : null;
        return { hasNextPage, nextPage };
    }
    return { pagination: { initialPage, calcTRPC, calcPrisma } };
}
