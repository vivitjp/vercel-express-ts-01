import { getJson } from '../getJson';

describe("オブジェクト", () => {

  //単数オブジェクト(toStrictEqual: 構造と型チェック)
  test('引数フル', () => {
    expect(getJson("Smith", 13)).toStrictEqual({ name: "Smith", age: 13 });
  });

  //単数オブジェクト(toEqual: 構造チェック)
  test('引数全オプショナル', () => {
    expect(getJson()).toEqual({ name: "John", age: 12 });
  });

  //単数オブジェクト(toStrictEqual: 構造と型チェック)
  test.each([
    [{ name: "Bill", age: 23 }, { name: "Bill", age: 23 }],
    [{ name: "", age: 0 }, { name: "John", age: 12 }]
  ])('引数配列', (val, res) => {
    expect(getJson(val.name, val.age)).toStrictEqual(res);
  });

});

export { }; //モジュラー化(変数衝突回避)