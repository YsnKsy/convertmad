import { ConvertMAD, convertMAD, CurrencyUnit } from "./convertMAD";

describe("convertMAD function", () => {
  test("should convert dirham to centime correctly", () => {
    expect(convertMAD(1, "dirham", "centime")).toBe(100);
  });

  test("should convert dirham to rial correctly", () => {
    expect(convertMAD(1, "dirham", "rial")).toBe(20);
  });

  test("should convert rial to dirham correctly", () => {
    expect(convertMAD(20, "rial", "dirham")).toBe(1);
  });

  test("should convert centime to dirham correctly", () => {
    expect(convertMAD(100, "centime", "dirham")).toBe(1);
  });

  test("should throw an error for unsupported conversion", () => {
    expect(() => convertMAD(1, "dirham", "unknown" as CurrencyUnit)).toThrow(
      "Conversion non prise en charge",
    );
  });
});

describe("ConvertMAD function", () => {
  test('should convert using the "to" method (dirham to centime)', () => {
    expect(ConvertMAD(1, "dirham").to("centime")).toBe(100);
  });

  test('should convert using the "to" method (rial to centime)', () => {
    expect(ConvertMAD(1, "rial").to("centime")).toBe(5);
  });
});
