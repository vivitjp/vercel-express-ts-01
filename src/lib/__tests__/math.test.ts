//import array_sum from '../math';
const mod = require('../math');

test('basic', () => {
  expect(mod.array_sum()).toBe(0);
});

test('basic again', () => {
  expect(mod.array_sum([1, 2])).toBe(3);
});

export { }; //モジュラー化(変数衝突回避)