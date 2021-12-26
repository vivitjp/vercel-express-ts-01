"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJson = void 0;
const math_1 = __importDefault(require("./lib/math"));
const getJson = (name = "Smith") => {
    const sum = (0, math_1.default)([1, 2, 3]) || 0;
    return { name, address: "Osaka", age: sum };
};
exports.getJson = getJson;
