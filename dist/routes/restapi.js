"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const makeJson_1 = __importDefault(require("../datalib/makeJson"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const router = express_1.default.Router();
router.get('/apiget', (req, res) => {
    const numStr = req.query.nums;
    const numInt = parseInt(numStr) || 10;
    const list = (0, makeJson_1.default)(numInt);
    res.send(list);
});
router.post('/apipost', (req, res) => {
    const str_out = "Morning " + req.query.name + "\n";
    res.send(str_out);
});
app.use(router);
app.listen(3000, () => { console.log('Example app listening on port 3000!'); });
