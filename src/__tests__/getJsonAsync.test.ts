import { getJsonAsync } from '../getJsonAsync';

//Object に tobe は使用不可(ID等価性)
//toStrictEqual(構造と型チェック)
test('getJsonAsync', async () => {
  const data = await getJsonAsync();
  expect(data).toStrictEqual(
    { name: "John", address: "Tokyo", age: 13 }
  );
});

//toEqual(構造チェック)
test('getJsonAsync', async () => {
  const data = await getJsonAsync("Mike");
  expect(data).toEqual(
    { name: "Mike", address: "Tokyo", age: 13 }
  );
});

//toEqual(構造チェック)
test.each([
  ["Jake", "Jake"],
  ["", "John"],
])('getJsonAsync', async (name, res) => {
  const data = await getJsonAsync(name);
  console.log(data);
  expect(data).toEqual(
    { name: res, address: "Tokyo", age: 13 }
  );
});

beforeAll(() => console.log('1:beforeAll'));
afterAll(() => console.log('100:afterAll'));

export { }; //モジュラー化(変数衝突回避)