import { getMax } from '../getMax';

describe("一般的な値", () => {

  test('Should get Max number', () => {
    expect(getMax(3, 7, 2, 5)).toStrictEqual(7);
  });

  test.each([
    [[9, 3, 7], 9],
    [[4, 8, 2], 8],
  ])('Should get Max number', (arr, res) => {
    expect(getMax(...arr)).toStrictEqual(res);
  });

});

export { }; //モジュラー化(変数衝突回避)