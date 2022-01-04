interface props {
  name: string, age: number
}

export const getJsonAsync = (name?: string | null, age?: number | null): Promise<props> => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve({ name: name || "Rose", age: age || 25 });
    }, 1000);
  });
}