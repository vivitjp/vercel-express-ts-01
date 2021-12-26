"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonAsync = void 0;
const getJsonAsync = (name = "John") => {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            resolve({ name: name, address: "Tokyo", age: 13 });
        }, 2000);
    });
};
exports.getJsonAsync = getJsonAsync;
