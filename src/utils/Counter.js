"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor({ initial = 0 }) {
        this.initial = initial;
        this.value = initial;
    }
    reset() { this.value = this.initial; }
    increment() { this.value += 1; }
    decrement() { this.value -= 1; }
    getValue() { return this.value; }
}
exports.Counter = Counter;
