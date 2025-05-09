"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT = SELECT;
exports.SELECT_log = SELECT_log;
function SELECT(select, from, opt) {
    var _a;
    let sql = `
SELECT ${select.join(', ')}
FROM ${from}`;
    if ((opt === null || opt === void 0 ? void 0 : opt.where) != undefined)
        sql += `
WHERE ${opt === null || opt === void 0 ? void 0 : opt.where}`;
    if ((opt === null || opt === void 0 ? void 0 : opt.orderby) != undefined)
        sql += `
ORDER BY ${(_a = opt === null || opt === void 0 ? void 0 : opt.orderby) === null || _a === void 0 ? void 0 : _a.map(x => Array.isArray(x) ? `${x[0]} ${x[1]}` : x).join(', ')}`;
    if ((opt === null || opt === void 0 ? void 0 : opt.limit) != undefined)
        sql += `
LIMIT ${opt === null || opt === void 0 ? void 0 : opt.limit}`;
    if ((opt === null || opt === void 0 ? void 0 : opt.offset) != undefined)
        sql += `
OFFSET ${opt === null || opt === void 0 ? void 0 : opt.offset}`;
    return sql;
}
// ============================================= //
// ==================== Log ==================== //
// ============================================= //
function SELECT_log(opt = { log: true }) {
    const SELECT_ALL = SELECT(['*'], 'Table');
    const SELECT_COL = SELECT(['ColA', 'ColB', 'ColC'], 'Table');
    const SELECT_ALL_WHERE = SELECT(['*'], 'Table', { where: 'ColA = 123' });
    const SELECT_ALL_ORDER = SELECT(['*'], 'Table', { orderby: ['RAND()'] });
    const SELECT_ALL_ORDER1 = SELECT(['*'], 'Table', { orderby: [['ColA', 'ASC']] });
    const SELECT_ALL_ORDER2 = SELECT(['*'], 'Table', { orderby: [['ColA', 'ASC'], ['ColB', 'DESC']] });
    const SELECT_COL_LIMIT = SELECT(['ColA', 'ColB', 'ColC'], 'Table', { limit: 10 });
    const SELECT_COL_OFFSET = SELECT(['ColA', 'ColB', 'ColC'], 'Table', { offset: 10 });
    const SELECT_COL_LIMIT_OFFSET = SELECT(['ColA', 'ColB', 'ColC'], 'Table', { limit: 10, offset: 10 });
    const SELECT_ALL_WHERE_ORDER_LIMIT_OFFSET = SELECT(['*'], 'Table', { where: 'ColA = 123', orderby: ['RAND()'], limit: 10, offset: 10 });
    if (opt === null || opt === void 0 ? void 0 : opt.log) {
        console.log('>> SELECT_ALL:', SELECT_ALL, '\n');
        console.log('>> SELECT_COL:', SELECT_COL, '\n');
        console.log('>> SELECT_ALL_WHERE:', SELECT_ALL_WHERE, '\n');
        console.log('>> SELECT_ALL_ORDER:', SELECT_ALL_ORDER, '\n');
        console.log('>> SELECT_ALL_ORDER1:', SELECT_ALL_ORDER1, '\n');
        console.log('>> SELECT_ALL_ORDER2:', SELECT_ALL_ORDER2, '\n');
        console.log('>> SELECT_COL_LIMIT:', SELECT_COL_LIMIT, '\n');
        console.log('>> SELECT_COL_OFFSET:', SELECT_COL_OFFSET, '\n');
        console.log('>> SELECT_COL_LIMIT_OFFSET:', SELECT_COL_LIMIT_OFFSET, '\n');
        console.log('>> SELECT_ALL_WHERE_ORDER_LIMIT_OFFSET:', SELECT_ALL_WHERE_ORDER_LIMIT_OFFSET, '\n');
    }
    return {
        SELECT_ALL,
        SELECT_COL,
        SELECT_ALL_WHERE,
        SELECT_ALL_ORDER,
        SELECT_ALL_ORDER1,
        SELECT_ALL_ORDER2,
        SELECT_COL_LIMIT,
        SELECT_COL_OFFSET,
        SELECT_COL_LIMIT_OFFSET,
        SELECT_ALL_WHERE_ORDER_LIMIT_OFFSET,
    };
}
