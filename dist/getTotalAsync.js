"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalAsync = void 0;
const getTotalAsync = async (...a) => {
    return new Promise((solved, rejected) => {
        setTimeout(() => {
            solved(a.reduce((acc, val) => acc + val, 0));
        }, 1000);
    });
};
exports.getTotalAsync = getTotalAsync;
