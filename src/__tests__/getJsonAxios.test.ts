import { getJsonAxios } from '../getJsonAxios';
import axios from 'axios';


//未完成
describe.skip("Axios 非同期テスト", () => {

  jest.mock('axios');

  test('should fetch users', async () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    //axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    //axios.get.mockImplementation(() => Promise.resolve(resp))

    return getJsonAxios(1).then(data => expect(data).toEqual(users));
  });

});
