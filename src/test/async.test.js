const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: "200" });
      done();
    });
  });
  //추천
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: "200" });
    });
  });
  //추천
  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: "200",
    });
  });
  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.tobe("network error");
  });
});

// test("", () => {
//   expect(fetchProduct(error)).toBe("error");
// });
