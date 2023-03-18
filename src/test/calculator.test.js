const Calculator = require("../calculator.js");

const cal = new Calculator();
// test("", () => {
//   cal.set(2);
//   expect(cal.value).toBe(2);
// });

describe("Calculator", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  it("inits with 0", () => {
    expect(calc.value).toBe(0);
  });

  it("sets", () => {
    calc.set(2);
    expect(calc.value).toBe(2);
  });

  it("clear", () => {
    calc.set(2);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it("adds", () => {
    calc.set(2);
    calc.add(2);
    expect(calc.value).toBe(4);
  });

  it("subtracts", () => {
    calc.set(2);
    calc.subtract(2);
    expect(calc.value).toBe(0);
  });

  it("multiplies", () => {
    calc.set(2);
    calc.multiply(6);
    expect(calc.value).toBe(12);
  });

  describe("divides", () => {
    it("0/0 === NaN", () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });
    it("1/0 === Infinity", () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
    it("divides", () => {
      calc.set(2);
      calc.divide(2);
      expect(calc.value).toBe(1);
    });
  });
});
