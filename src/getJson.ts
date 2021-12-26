//import arr_sum from './lib/math';
const math_mod = require('./lib/math');

export const getJson = (name: string = "Smith") => {
  const sum = math_mod.array_sum([1, 2, 3]) || 0;
  return { name, address: "Osaka", age: sum };
}

//module.exports = { getJson };   // getJson.getJaon()
//module.exports = { default: getJson };   // getJson.default()
//export default getJson;
