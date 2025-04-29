export function stringify(left:string[], right:Record<string, undefined|null|boolean|number|string>) {
    return [
        left.join('/'), 
        Object
            .entries(right)
            .filter(([k, v]) => (k != '') && (v != undefined))
            .map(([k, v]) => k+'='+v)
            .join('&')
    ].join('?')
}