import { getJsonAsync } from '../getJsonAsync';

describe("オブジェクト(Async)", () => {

  //単数オブジェクト(toStrictEqual: 構造と型チェック)
  test('引数フル', async () => {
    const data = await getJsonAsync("Lily", 18);
    expect(data).toStrictEqual({ name: "Lily", age: 18 });
  });

  //単数オブジェクト(toEqual: 構造チェック)
  test('引数全オプショナル', async () => {
    const data = await getJsonAsync();
    expect(data).toEqual({ name: "Rose", age: 25 });
  });

  //単数オブジェクト(toStrictEqual: 構造と型チェック)
  test.each([
    [{ name: "Hellen", age: 45 }, { name: "Hellen", age: 45 }],
    [{ name: null, age: null }, { name: "Rose", age: 25 }]
  ])('引数配列', async (val, res) => {
    const result = await getJsonAsync(val.name, val.age);
    expect(result).toStrictEqual(res);
  });

});

export { }; //モジュラー化(変数衝突回避)