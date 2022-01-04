interface props {
  (name?: string, age?: number): {}
}

export const getJson: props = (name, age) => {
  return { name: name || "John", age: age || 12 };
}