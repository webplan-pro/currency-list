import CurrencyList from "./index"

// console.log(CurrencyList.getAll()) // Prints all currency lists for all locales
console.log(CurrencyList.getAll('en_US')) // Prints all currency lists for en_US locale
console.log(CurrencyList.get("EUR")) /* Prints  {
    name: 'Euro',
    symbol_native: '€',
    symbol: '€',
    code: 'EUR',
    name_plural: 'euros',
    rounding: 0,
    decimal_digits: 2
  } as in default locale 'en_US'
  */
console.log(CurrencyList.get("UAH", 'zh')) /* Prints {
    name: '乌克兰格里夫纳',
    symbol_native: '₴',
    symbol: '₴',
    code: 'UAH',
    name_plural: 'Ukrainian hryvnias',
    rounding: 0,
    decimal_digits: 2
  } as in 'zh' locale */