import arr_sum from './lib/math';

export const getJson = (name: string = "Smith") => {
  const sum = arr_sum([1, 2, 3]) || 0;
  return { name, address: "Osaka", age: sum };
}