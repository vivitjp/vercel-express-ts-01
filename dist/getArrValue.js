"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrValue = void 0;
const getArrValue = (array, callback) => {
    const retArr = [];
    for (let i = 0; i < array.length; i++) {
        retArr.push(callback(array[i]));
    }
    return retArr;
};
exports.getArrValue = getArrValue;
