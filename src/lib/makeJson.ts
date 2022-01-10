import { getAddress, IFAddress } from '../json/address';
import { getPerson, IFPerson } from '../json/person'
import { getCompany, IFCompany } from '../json/company';
import { getCompDep, IFCompDep } from '../json/comp_dep';
import { getCompTitle, IFCompTitle } from '../json/comp_title';

interface objNameListType {
  lastname: string;
  firstname: string;
  sex?: string;
  age?: number;
  ken?: string;
  city?: string;
  postal?: string;
  cell?: string;
  company?: string;
  department?: string;
  title?: string;
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
      lastname: person["lastname"],
      firstname: person["firstname"],
      sex: person["sex"],
      age: getAge(22, 50),
      ken: address["K"],
      city: address["G"] + address["C"],
      company: getCompany()["K"],
      department: getCompDep()["K"],
      title: getCompTitle()["K"],
    }
    retObj.push(item);
  }

  return retObj;
}

export default listWorker;