"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const makeJson_1 = __importDefault(require("./lib/makeJson"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    try {
        const list = (0, makeJson_1.default)(3);
        res.send(list);
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