import { getJsonAsync } from '../getJsonAsync';

//Object に tobe は使用不可(ID等価性)
//toStrictEqual(構造と型チェック)
test('math lib default value', async () => {
  const data = await getJsonAsync();
  expect(data).toStrictEqual(
    { name: "John", address: "Tokyo", age: 13 }
  );
});

//toEqual(構造チェック)
test('math lib given value', async () => {
  const data = await getJsonAsync("Mike");
  expect(data).toEqual(
    { name: "Mike", address: "Tokyo", age: 13 }
  );
});

export { }; //モジュラー化(変数衝突回避)