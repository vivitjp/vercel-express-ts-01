export const getMax = (...nums: number[]) => {
  return nums.reduce((acc, num) => acc > num ? acc : num)
}
