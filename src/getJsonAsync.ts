interface jsondoc {
  name: string,
  address: string,
  age: number
}

export const getJsonAsync = (name?: string): Promise<jsondoc> => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve({
        name: name || "John",
        address: "Tokyo",
        age: 13
      });
    }, 2000);
  });
}