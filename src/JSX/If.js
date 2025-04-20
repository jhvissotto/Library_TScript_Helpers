"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = If;
function If({ cond, children }) {
    return cond ? children : null;
}
