import { getAddress, IFAddress } from '../json/address';
import { getPerson, IFPerson } from '../json/person'
import { getCompany, IFCompany } from '../json/company';
import { getCompDep, IFCompDep } from '../json/comp_dep';
import { getCompTitle, IFCompTitle } from '../json/comp_title';

interface objNameListType {
  last_name: string         //姓
  first_name: string        //名前
  sex?: string             //
  age?: number
  ken?: string
  city?: string
  postal?: string
  cell?: string
  company?: string
  department?: string
  title?: string
  start_date?: string,    //日付(開始) TimeStamp
  end_date?: string,      //日付(終了) TimeStamp
  act?: boolean           //アクティブ是非
}

function getAge(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

const listWorker = (listSize: number = 10): objNameListType[] => {

  if (!listSize) return [];
  listSize = listSize > 20 ? 20 : listSize;

  let retObj = [];

  for (let i = 0; i < listSize; i++) {

    const person: IFPerson = getPerson();
    const address: IFAddress = getAddress();

    const item: objNameListType = {
      last_name: person["last_name"],
      first_name: person["first_name"],
      sex: person["sex"],
      age: getAge(22, 50),
      ken: address["KEN"],
      city: address["GUN"] + address["CITY"],
      company: getCompany()["JP"],
      department: getCompDep()["JP"],
      title: getCompTitle()["JP"],
      start_date: String(new Date()),
      act: true,
    }
    retObj.push(item);
  }

  return retObj;
}

export default listWorker;