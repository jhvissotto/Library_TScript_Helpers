"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistedState = usePersistedState;
const react_1 = require("react");
function usePersistedState(state1, initial) {
    const [state2, setState2] = (0, react_1.useState)(initial);
    (0, react_1.useEffect)(() => {
        if (state1)
            setState2(state1);
    }, [state1]);
    return [state2, setState2];
}
