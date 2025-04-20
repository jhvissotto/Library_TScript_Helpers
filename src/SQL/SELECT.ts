export function SELECT<Columns extends string, Tables extends string>(select:('*'|Columns)[], from:Tables, opt?:{ orderby?:[Columns, 'ASC'|'DESC'][], limit?:number, offset?:number }) {

let sql = `
SELECT ${select.join(', ')}
FROM ${from}`

if (Array.isArray(opt?.orderby) && (opt?.orderby.length > 0)) sql += `
ORDER BY ${opt?.orderby?.map(x => `${x[0]} ${x[1]}`).join(', ')}`

if ((typeof opt?.limit == 'number') && (opt?.limit >= 0)) sql += `
LIMIT ${opt.limit}`

if ((typeof opt?.offset == 'number') && (opt?.offset >= 0)) sql += `
OFFSET ${opt.offset}`

return sql
}



// ============================================= //
// ==================== Log ==================== //
// ============================================= //
export function SELECT_log(opt={ log:true }) {
    
    const SELECT_ALL = SELECT(['*'], 'Table')
    const SELECT_COL = SELECT(['ColA','ColB','ColC'], 'Table')
    
    const SELECT_ALL_ORDER1 = SELECT(['*'], 'Table', { orderby:[['ColA','ASC']] })
    const SELECT_ALL_ORDER2 = SELECT(['*'], 'Table', { orderby:[['ColA','ASC'], ['ColB','DESC']] })
    
    const SELECT_COL_LIMIT        = SELECT(['ColA','ColB','ColC'], 'Table', { limit:10 })
    const SELECT_COL_OFFSET       = SELECT(['ColA','ColB','ColC'], 'Table', { offset:10 })
    const SELECT_COL_LIMIT_OFFSET = SELECT(['ColA','ColB','ColC'], 'Table', { limit:10, offset:10 })
    
    const SELECT_ALL_ORDER1_LIMIT_OFFSET = SELECT(['*'], 'Table', { orderby:[['ColA','ASC']], limit:10, offset:10 })
    
    if (opt?.log) {
        console.log('>> SELECT_ALL:',                     SELECT_ALL,                     '\n')
        console.log('>> SELECT_COL:',                     SELECT_COL,                     '\n')
        console.log('>> SELECT_ALL_ORDER1:',              SELECT_ALL_ORDER1,              '\n')
        console.log('>> SELECT_ALL_ORDER2:',              SELECT_ALL_ORDER2,              '\n')
        console.log('>> SELECT_COL_LIMIT:',               SELECT_COL_LIMIT,               '\n')
        console.log('>> SELECT_COL_OFFSET:',              SELECT_COL_OFFSET,              '\n')
        console.log('>> SELECT_COL_LIMIT_OFFSET:',        SELECT_COL_LIMIT_OFFSET,        '\n')
        console.log('>> SELECT_ALL_ORDER1_LIMIT_OFFSET:', SELECT_ALL_ORDER1_LIMIT_OFFSET, '\n')
    }
    
    return {
        SELECT_ALL, 
        SELECT_COL, 
        SELECT_ALL_ORDER1, 
        SELECT_ALL_ORDER2, 
        SELECT_COL_LIMIT, 
        SELECT_COL_OFFSET, 
        SELECT_COL_LIMIT_OFFSET, 
        SELECT_ALL_ORDER1_LIMIT_OFFSET, 
    }
}