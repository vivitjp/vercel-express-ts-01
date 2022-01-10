export interface IFCompTitle {
  L: string;
  C: string;
  K: string;
  E: string;
}

const comp_title: Array<IFCompTitle> = [
  { "L": "1", "C": "エグゼクティブ", "K": "取締役会長", "E": "Chairperson" },
  { "L": "1", "C": "エグゼクティブ", "K": "理事長", "E": "Board Chairman" },
  { "L": "1", "C": "エグゼクティブ", "K": "取締役副会長", "E": "Vice Chairperson" },
  { "L": "1", "C": "エグゼクティブ", "K": "代表取締役", "E": "Representative Director" },
  { "L": "1", "C": "エグゼクティブ", "K": "社長", "E": "President" },
  { "L": "1", "C": "エグゼクティブ", "K": "副社長", "E": "Senior Vice President" },
  { "L": "1", "C": "エグゼクティブ", "K": "専務取締役", "E": "Senior Managing Director" },
  { "L": "1", "C": "エグゼクティブ", "K": "常務取締役", "E": "Managing Director" },
  { "L": "1", "C": "エグゼクティブ", "K": "取締役", "E": "Director" },
  { "L": "1", "C": "エグゼクティブ", "K": "社外取締役", "E": "Outside Director" },
  //  { "L": "1", "C": "エグゼクティブ", "K": "相談役", "E": "Senior Adviser" },
  //  { "L": "1", "C": "エグゼクティブ", "K": "監査役", "E": "Auditor" },
  //  { "L": "1", "C": "エグゼクティブ", "K": "執行役員", "E": "Corporate Officer" },
  //  { "L": "1", "C": "エグゼクティブ", "K": "参与", "E": "Counselor" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高経営責任者", "E": "CEO(Chief Executive Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高業務執行責任者", "E": "COO(Chief Operating Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高財務責任者", "E": "CFO(Chief Financial Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高法務責任者", "E": "CJO(Chief Judicial Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高マーケティング責任者", "E": "CMO(Chief Marketing Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高情報責任者", "E": "CIO(Chief Information Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "最高技術責任者", "E": "CTO(Chief Technical Officer)" },
  { "L": "1", "C": "エグゼクティブ", "K": "支社長", "E": "Vice President" },
  { "L": "1", "C": "エグゼクティブ", "K": "支店長", "E": "Branch Manager" },
  { "L": "1", "C": "エグゼクティブ", "K": "工場長", "E": "Factory Director" },
  { "L": "2", "C": "部長", "K": "本部長", "E": "General Manager" },
  { "L": "2", "C": "部長", "K": "部長", "E": "Manager" },
  { "L": "2", "C": "部長", "K": "営業部長", "E": "Sales Manager" },
  { "L": "2", "C": "部長", "K": "総務部長", "E": "Administrative Manager" },
  { "L": "2", "C": "部長", "K": "財務部長", "E": "Financial Director" },
  { "L": "2", "C": "部長", "K": "副部長", "E": "Assistant Manager" },
  { "L": "2", "C": "部長", "K": "業務部長", "E": "Department Chief" },
  { "L": "2", "C": "部長", "K": "部長代理", "E": "Assistant Manager" },
  { "L": "2", "C": "部長", "K": "次長", "E": "Assistant General Manager" },
  { "L": "3", "C": "課長", "K": "課長", "E": "Section Chief" },
  { "L": "3", "C": "課長", "K": "課長補佐", "E": "Assistant Director" },
  { "L": "3", "C": "課長", "K": "営業部長", "E": "Sales Manager" },
  { "L": "3", "C": "課長", "K": "課長代理", "E": "Deputy Manager" },
  { "L": "3", "C": "課長", "K": "参事", "E": "Secretary" },
  { "L": "3", "C": "課長", "K": "副参事", "E": "Deputy Associate Director" },
  { "L": "3", "C": "課長", "K": "主幹", "E": "Chief Editor" },
  { "L": "4", "C": "グループ", "K": "係長", "E": "Section Head" },
  { "L": "4", "C": "グループ", "K": "主任", "E": "Supervisor" },
  { "L": "4", "C": "グループ", "K": "主査", "E": "Project General Manager" },
  { "L": "5", "C": "役職なし", "K": "社員", "E": "Staff" },
  { "L": "5", "C": "役職なし", "K": "アシスタント", "E": "Assistant" },
  { "L": "5", "C": "役職なし", "K": "研修生", "E": "Trainee" },
  { "L": "5", "C": "役職なし", "K": "インターン", "E": "Intern" },
]

const arr_size: number = comp_title.length;

export const getCompTitle = (): IFCompTitle => {
  const idx = Math.floor(Math.random() * arr_size);
  return comp_title[idx]
}
