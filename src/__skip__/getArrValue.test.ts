import { getArrValue } from '../getArrValue';

describe("Mock Callback function", () => {
  test('mock getArrValue', () => {
    const mockCB = jest.fn(x => x ** 2);         //callback関数作成
    const result = getArrValue([1, 2, 3], mockCB);

    expect(mockCB.mock.calls.length).toBe(3);  //コール回数(配列サイズ)

    expect(mockCB.mock.calls[0][0]).toBe(1);   //CBコール1回目[0]の引数1つ目[0]
    expect(mockCB.mock.calls[1][0]).toBe(2);   //CBコール2回目[1]の引数1つ目[0]

    expect(mockCB.mock.results[0].value).toBe(1);    //最初[0]のCBコールの結果
    expect(mockCB.mock.results[1].value).toBe(4);    //最初[1]のCBコールの結果
  });

});

export { }; //モジュラー化(変数衝突回避)