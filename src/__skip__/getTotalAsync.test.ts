import { getTotalAsync } from '../getTotalAsync';

describe("合計値[非同期]", () => {

  //単数値
  test('getJsonAsync', async () => {
    const data = await getTotalAsync(1, 2, 3);
    expect(data).toBe(6);
  });

  //複数値配列 each([[vals, res]])
  test.each([
    [[2, 3, 4], 9],
    [[5, 6, 7], 18],
  ])('合計値[非同期]', async (vals, res) => {
    const data = await getTotalAsync(...vals);
    expect(data).toBe(res);
  });
});

export { }; //モジュラー化(変数衝突回避)