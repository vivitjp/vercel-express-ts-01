"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompTitle = void 0;
const comp_rank = {
    "1": "エグゼクティブ",
    "2": "部長",
    "3": "課長",
    "4": "グループ",
    "5": "役職なし",
};
const comp_title = [
    { "R": "1", "K": "取締役会長", "E": "Chairperson" },
    { "R": "1", "K": "理事長", "E": "Board Chairman" },
    { "R": "1", "K": "取締役副会長", "E": "Vice Chairperson" },
    { "R": "1", "K": "代表取締役", "E": "Representative Director" },
    { "R": "1", "K": "社長", "E": "President" },
    { "R": "1", "K": "副社長", "E": "Senior Vice President" },
    { "R": "1", "K": "専務取締役", "E": "Senior Managing Director" },
    { "R": "1", "K": "常務取締役", "E": "Managing Director" },
    { "R": "1", "K": "取締役", "E": "Director" },
    { "R": "1", "K": "社外取締役", "E": "Outside Director" },
    { "R": "1", "K": "最高経営責任者", "E": "CEO(Chief Executive Officer)" },
    { "R": "1", "K": "最高業務執行責任者", "E": "COO(Chief Operating Officer)" },
    { "R": "1", "K": "最高財務責任者", "E": "CFO(Chief Financial Officer)" },
    { "R": "1", "K": "最高法務責任者", "E": "CJO(Chief Judicial Officer)" },
    { "R": "1", "K": "最高マーケティング責任者", "E": "CMO(Chief Marketing Officer)" },
    { "R": "1", "K": "最高情報責任者", "E": "CIO(Chief Information Officer)" },
    { "R": "1", "K": "最高技術責任者", "E": "CTO(Chief Technical Officer)" },
    { "R": "1", "K": "支社長", "E": "Vice President" },
    { "R": "1", "K": "支店長", "E": "Branch Manager" },
    { "R": "1", "K": "工場長", "E": "Factory Director" },
    { "R": "2", "K": "本部長", "E": "General Manager" },
    { "R": "2", "K": "部長", "E": "Manager" },
    { "R": "2", "K": "営業部長", "E": "Sales Manager" },
    { "R": "2", "K": "総務部長", "E": "Administrative Manager" },
    { "R": "2", "K": "財務部長", "E": "Financial Director" },
    { "R": "2", "K": "副部長", "E": "Assistant Manager" },
    { "R": "2", "K": "業務部長", "E": "Department Chief" },
    { "R": "2", "K": "部長代理", "E": "Assistant Manager" },
    { "R": "2", "K": "次長", "E": "Assistant General Manager" },
    { "R": "3", "K": "課長", "E": "Section Chief" },
    { "R": "3", "K": "課長補佐", "E": "Assistant Director" },
    { "R": "3", "K": "営業部長", "E": "Sales Manager" },
    { "R": "3", "K": "課長代理", "E": "Deputy Manager" },
    { "R": "3", "K": "参事", "E": "Secretary" },
    { "R": "3", "K": "副参事", "E": "Deputy Associate Director" },
    { "R": "3", "K": "主幹", "E": "Chief Editor" },
    { "R": "4", "K": "係長", "E": "Section Head" },
    { "R": "4", "K": "主任", "E": "Supervisor" },
    { "R": "4", "K": "主査", "E": "Project General Manager" },
    { "R": "5", "K": "社員", "E": "Staff" },
    { "R": "5", "K": "アシスタント", "E": "Assistant" },
    { "R": "5", "K": "研修生", "E": "Trainee" },
    { "R": "5", "K": "インターン", "E": "Intern" },
];
const arr_size = comp_title.length;
const getCompTitle = () => {
    const idx = Math.floor(Math.random() * arr_size);
    return {
        RANK: comp_title[idx]["R"],
        JP: comp_title[idx]["K"],
        EN: comp_title[idx]["E"],
    };
};
exports.getCompTitle = getCompTitle;
