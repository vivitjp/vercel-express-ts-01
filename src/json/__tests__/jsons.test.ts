import { getAddress } from '../address'
import { getPerson } from '../person'
import { getCompany } from '../company';
import { getCompDep } from '../comp_dep';
import { getCompTitle } from '../comp_title';

describe('フェイクJSONデータ型テスト', () => {
  test('getAddress() の戻り値オブジェクトが持つ型', () => {
    expect(getAddress()).toEqual({
      "KEN": expect.any(String),
      "GUN": expect.any(String),
      "CITY": expect.any(String),
    })
  });

  test('人: getPerson() の戻り値オブジェクトが持つ型', () => {
    expect(getPerson()).toEqual({
      "last_name": expect.any(String),
      "first_name": expect.any(String),
      "sex": expect.any(String),
    })
  });

  test('会社: getCompany() の戻り値オブジェクトが持つ型', () => {
    expect(getCompany()).toEqual({
      "JP": expect.any(String),
    })
  });

  test('会社部門: getCompDep() の戻り値オブジェクトが持つ型', () => {
    expect(getCompDep()).toEqual({
      "JP": expect.any(String),
      "EN": expect.any(String),
    })
  });

  test('会社職位: getCompTitle() の戻り値オブジェクトが持つ型', () => {
    expect(getCompTitle()).toEqual({
      "RANK": expect.any(String),
      "JP": expect.any(String),
      "EN": expect.any(String),
    })
  });

});
