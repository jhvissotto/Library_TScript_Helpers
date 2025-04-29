"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = stringify;
function stringify(left, right) {
    return [
        left.filter(Boolean).join('/'),
        Object
            .entries(right)
            .filter(([k, v]) => (k != '') && (v != undefined))
            .map(([k, v]) => k + '=' + v)
            .filter(Boolean).join('&')
    ].filter(Boolean).join('?');
}
