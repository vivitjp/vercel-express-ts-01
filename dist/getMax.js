"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMax = void 0;
const getMax = (...nums) => {
    return nums.reduce((acc, num) => acc > num ? acc : num);
};
exports.getMax = getMax;
