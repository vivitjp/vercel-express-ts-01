"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("../json/address");
const person_1 = require("../json/person");
const company_1 = require("../json/company");
const comp_dep_1 = require("../json/comp_dep");
const comp_title_1 = require("../json/comp_title");
function getAge(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const listWorker = (listSize = 10) => {
    if (!listSize)
        return [];
    listSize = listSize > 20 ? 20 : listSize;
    let retObj = [];
    for (let i = 0; i < listSize; i++) {
        const person = (0, person_1.getPerson)();
        const address = (0, address_1.getAddress)();
        const item = {
            lastname: person["lastname"],
            firstname: person["firstname"],
            sex: person["sex"],
            age: getAge(22, 50),
            ken: address["KEN"],
            city: address["GUN"] + address["CITY"],
            company: (0, company_1.getCompany)()["JP"],
            department: (0, comp_dep_1.getCompDep)()["JP"],
            title: (0, comp_title_1.getCompTitle)()["JP"],
            start_date: String(new Date()),
            act: true,
        };
        retObj.push(item);
    }
    return retObj;
};
exports.default = listWorker;
