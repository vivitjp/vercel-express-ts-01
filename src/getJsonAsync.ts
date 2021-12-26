interface jsondoc {
  name: string,
  address: string,
  age: number
}

export const getJsonAsync = (name: string = "John"): Promise<jsondoc> => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve({ name: name, address: "Tokyo", age: 13 });
    }, 2000);
  });
}