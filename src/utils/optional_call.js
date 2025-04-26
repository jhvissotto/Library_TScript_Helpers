"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional_call = optional_call;
function optional_call(pipe, func, arg) {
    return arg
        ? pipe[func].call(pipe, arg)
        : pipe;
}
