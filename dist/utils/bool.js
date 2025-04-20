export function bool(x) {
    if (Array.isArray(x)) {
        return Boolean(x.length);
    }
    if (typeof x == 'object') {
        return Boolean(Object.keys(x).length);
    }
    return Boolean(x);
}
