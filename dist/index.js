"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const getJson_1 = require("./getJson");
const getJsonAsync_1 = require("./getJsonAsync");
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    try {
        const ans1 = await (0, getJsonAsync_1.getJsonAsync)("Gates");
        const ans2 = (0, getJson_1.getJson)("Steve");
        res.send([ans1, ans2]);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
exports.default = app;
