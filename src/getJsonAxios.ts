import axios from 'axios';

export const getJsonAxios = async (id: number): Promise<any> => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
  //data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
};