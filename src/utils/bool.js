"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = bool;
function bool(x) {
    if (Array.isArray(x)) {
        return Boolean(x.length);
    }
    if (typeof x == 'object') {
        return Boolean(Object.keys(x).length);
    }
    return Boolean(x);
}
