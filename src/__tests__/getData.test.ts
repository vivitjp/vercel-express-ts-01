import { getJson } from '../getJson';

//Object に tobe は使用不可(ID等価性)
//toStrictEqual(構造と型チェック)
test('math lib default value', () => {
  expect(getJson()).toStrictEqual({
    name: "Smith", address: "Osaka", age: 6
  });
});

//toEqual(構造チェック)
test('math lib given value', () => {
  expect(getJson("Steve")).toEqual({
    name: "Steve", address: "Osaka", age: 6
  });
});

export { }; //モジュラー化(変数衝突回避)