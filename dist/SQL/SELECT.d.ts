export declare function SELECT<Columns extends string, Tables extends string>(select: ('*' | Columns)[], from: Tables, opt?: {
    orderby?: [Columns, 'ASC' | 'DESC'][];
    limit?: number;
    offset?: number;
}): string;
export declare function SELECT_log(opt?: {
    log: boolean;
}): {
    SELECT_ALL: string;
    SELECT_COL: string;
    SELECT_ALL_ORDER1: string;
    SELECT_ALL_ORDER2: string;
    SELECT_COL_LIMIT: string;
    SELECT_COL_OFFSET: string;
    SELECT_COL_LIMIT_OFFSET: string;
    SELECT_ALL_ORDER1_LIMIT_OFFSET: string;
};
