"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReactivity = void 0;
const createReactivity = () => {
    let state;
    const updateState = (newState) => {
        state = Object.assign(Object.assign({}, state), newState);
    };
    return [state, updateState];
};
exports.createReactivity = createReactivity;
