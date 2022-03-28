import CurrencyList from "currency-list";

describe("Basic unit tests", () => {
  it("should get EUR with default locale", () => {
    expect(CurrencyList.get("EUR")).toEqual({
      name: "Euro",
      symbol_native: "€",
      symbol: "€",
      code: "EUR",
      name_plural: "euros",
      rounding: 0,
      decimal_digits: 2,
    });
  });
  it("should get UAH with zh locale", () => {
    expect(CurrencyList.get("UAH", "zh")).toEqual({
      name: "乌克兰格里夫纳",
      symbol_native: "₴",
      symbol: "₴",
      code: "UAH",
      name_plural: "Ukrainian hryvnias",
      rounding: 0,
      decimal_digits: 2,
    });
  });
});
