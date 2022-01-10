"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const getJsonAxios = async (id) => {
    const results = await axios_1.default.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return results.data;
};
exports.getJsonAxios = getJsonAxios;
