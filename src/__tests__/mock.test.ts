describe("Mock function", () => {
  test('mock return values', () => {
    const mock = jest.fn();         //mock関数作成

    mock
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(9);

    const result1 = mock();
    const result2 = mock();

    expect(result1).toBe(4);    //1番目のチェーンコールの結果
    expect(result2).toBe(9);    //2番目のチェーンコールの結果
  });
});

//export { }; //モジュラー化(変数衝突回避)