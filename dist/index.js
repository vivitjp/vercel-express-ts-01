"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const getJson_1 = require("./getJson");
const getJsonAsync_1 = require("./getJsonAsync");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
