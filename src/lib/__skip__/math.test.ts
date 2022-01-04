import array_sum from '../math';

test('basic', () => {
  expect(array_sum()).toBe(0);
});

test('basic again', () => {
  expect(array_sum([1, 2])).toBe(3);
});

export { }; //モジュラー化(変数衝突回避)