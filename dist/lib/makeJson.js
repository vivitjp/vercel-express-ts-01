"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("src/json/address");
const person_name_1 = require("../json/person_name");
const comp_name_1 = require("src/json/comp_name");
const comp_dep_1 = require("src/json/comp_dep");
const comp_title_1 = require("src/json/comp_title");
const listWorker = (listSize = 10) => {
    if (!listSize)
        return [];
    listSize = listSize > 20 ? 20 : listSize;
    let retObj = [];
    for (let i = 0; i < listSize; i++) {
        const person = (0, person_name_1.getPersonFullname)();
        const address = (0, address_1.getAddress)();
        const item = {
            lastname: person["lastname"],
            firstname: person["firstname"],
            sex: person["sex"],
            ken: address["ken"],
            city: address["city"],
            company: (0, comp_name_1.getCompName)()["K"],
            department: (0, comp_dep_1.getCompDep)()["K"],
            title: (0, comp_title_1.getCompTitle)()["K"],
        };
        retObj.push(item);
    }
    return retObj;
};
exports.default = listWorker;
