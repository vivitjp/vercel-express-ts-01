export const getTotalAsync
  = async (...a: number[]) => {
    return new Promise((solved, rejected) => {
      setTimeout(() => {
        solved(a.reduce((acc, val) => acc + val, 0))
      }, 1000)
    });
  }