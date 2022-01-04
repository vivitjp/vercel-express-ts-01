interface callbackType { (argv: number): number };

export const getArrValue = (array: number[], callback: callbackType): number[] => {

  return array.map(
    val => callback(val)
  );

  // const retArr: number[] = [];
  // array.forEach(
  //   (val) => { val = callback(val) }
  // );

  // const retArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   retArr.push(callback(array[i]));
  // }
  // return retArr;
}
