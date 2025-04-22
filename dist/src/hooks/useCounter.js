"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounter = useCounter;
const react_1 = require("react");
function useCounter({ initial = 0 }) {
    const [value, setValue] = (0, react_1.useState)(initial);
    function reset() { setValue(initial); }
    function increment() { setValue(val => val + 1); }
    function decrement() { setValue(val => val - 1); }
    return { value, setValue, reset, increment, decrement };
}
