"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonAsync = void 0;
const getJsonAsync = (name, age) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve({ name: name || "Rose", age: age || 25 });
        }, 1000);
    });
};
exports.getJsonAsync = getJsonAsync;
