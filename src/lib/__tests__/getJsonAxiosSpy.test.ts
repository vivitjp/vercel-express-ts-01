import { getJsonAxios } from '../getJsonAxios';
import axios from 'axios';

describe("Axios 非同期テスト", () => {
  //Axios 非同期テスト
  test('JSONオブジェクトの属性名テスト', async () => {
    const results = await getJsonAxios(1);       //console.log(results);
    expect(results).toHaveProperty("userId");    // オブジェクト属性テスト
  });

  //SpyOn
  test('スパイ関数で戻り値を上書き', async () => {
    const spy = jest.spyOn(axios, 'get');
    spy.mockResolvedValue({                     // mockResolvedValue 非同期メソッド
      data: { id: 1, todo: 'Hello' }            // axiosが返すjsonに合わせたデータ構造が必要
    });
    const results = await getJsonAxios(1);      // console.log(results);
    expect(results.todo).toBe("Hello");
    spy.mockRestore();                          // spyOnのリセット(同じdesc()内でのみ影響)
  });

});
