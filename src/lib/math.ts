const array_sum = (arr: number[] = []) =>
  arr.reduce((acc, val) => acc + val, 0);

module.exports = { array_sum }; // commonjs non-default export
//export default array_sum;       // es module default export