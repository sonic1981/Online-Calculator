import { Calculation } from "./calculation"

describe('Calculation', () => {

  test('1 + 2', () => {
    const result = Calculation(["1","+","2"]);

    expect(result).toEqual(3);
  })

  test('11 + 2', () => {
    const result = Calculation(["1","1","+","2"]);

    expect(result).toEqual(13);
  })

  test('11000 * 20', () => {
    const result = Calculation(["1","1","0","0","0","*","2", "0"]);

    expect(result).toEqual(220000);
  })

  test('11000 / 20', () => {
    const result = Calculation(["1","1","0","0","0","/","2", "0"]);

    expect(result).toEqual(550);
  })

  test('1 + 2 + 2', () => {
    const result = Calculation(["1","+","2","+","2"]);

    expect(result).toEqual(5);
  })
})