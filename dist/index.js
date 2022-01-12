"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const makeJson_1 = __importDefault(require("./datalib/makeJson"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    res.sendStatus(404);
});
app.get('/:count', function (req, res) {
    const count = parseInt(req.params.count);
    if (count > 1) {
        res.send((0, makeJson_1.default)(count));
    }
    else {
        res.send({ "MSG": "Invalid Parameter" });
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});
exports.default = app;
