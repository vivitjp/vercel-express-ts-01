"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompDep = void 0;
const comp_dep = [
    { "K": "マーケティング部", "E": "Marketing Department" },
    { "K": "営業推進部", "E": "Business Promotion Department" },
    { "K": "営業部", "E": "Business Department" },
    { "K": "開発部", "E": "Development Department" },
    { "K": "企画開発部", "E": "Project Planning ＆ Development Department" },
    { "K": "企画部", "E": "Planning Department" },
    { "K": "技術部", "E": "Engineering Department" },
    { "K": "経営企画部", "E": "Corporate Planning department" },
    { "K": "経理部", "E": "Accounting Department" },
    { "K": "研究室", "E": "Research Department（Laboratory）" },
    { "K": "広報部", "E": "Public Relations Department" },
    { "K": "購買部", "E": "Purchasing Department" },
    { "K": "財務部", "E": "Finance Department" },
    { "K": "資材部", "E": "Material Department" },
    { "K": "社長室", "E": "Office of the President" },
    { "K": "人事部", "E": "Human Resources Division" },
    { "K": "生産管理部", "E": "Production Control Department" },
    { "K": "製造部", "E": "Manufacturing Division" },
    { "K": "設計部", "E": "Design Department" },
    { "K": "宣伝部", "E": "Publicity Department" },
    { "K": "総務部", "E": "General Affairs Department" },
    { "K": "知的財産部", "E": "Intellectual Property Department" },
    { "K": "調査部", "E": "Research Department" },
    { "K": "調達課", "E": "Procurement Section（Division）" },
    { "K": "販売促進部", "E": "Promotion Division" },
    { "K": "秘書室", "E": "Secretarial Office（Secretariat）" },
    { "K": "法務部", "E": "Legal Department" },
    { "K": "輸出部", "E": "Export Departoment" },
    { "K": "流通部", "E": "Logistics Department" },
];
const arr_size = comp_dep.length;
const getCompDep = () => {
    const idx = Math.floor(Math.random() * arr_size);
    return {
        JP: comp_dep[idx]["K"],
        EN: comp_dep[idx]["E"],
    };
};
exports.getCompDep = getCompDep;
