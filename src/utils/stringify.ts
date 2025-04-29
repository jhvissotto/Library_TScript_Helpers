export function stringify(left:string[], right:Record<string, undefined|null|boolean|number|string>) {
    return [
        left.filter(Boolean).join('/'), 
        Object
            .entries(right)
            .filter(([k, v]) => (k != '') && (v != undefined))
            .map(([k, v]) => k+'='+v)
            .filter(Boolean).join('&')
    ].filter(Boolean).join('?')
}