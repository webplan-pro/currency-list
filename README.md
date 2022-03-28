# Currency-list

Utility package for localized currency list

## Installation

Package available via:

- NPM `npm install currency-list`

## Usage

Module exports `CurrencyList` and functions `get(currency_code, locale = 'en_us')` and `getAll(locale?)`
where `currency_code` is ISO 4217 currency code and `locale` is ISO 3166‑1

### Example

```
import CurrencyList from 'currency-list'

console.log(CurrencyList.getAll()) // Prints all currency lists for all locales
console.log(CurrencyList.getAll('en_US')) // Prints all currency lists for en_US locale
console.log(CurrencyList.get("EUR"))
/* Prints  {
    name: 'Euro',
    symbol_native: '€',
    symbol: '€',
    code: 'EUR',
    name_plural: 'euros',
    rounding: 0,
    decimal_digits: 2
  } as in default locale 'en_US'
  */
console.log(CurrencyList.get("UAH", 'zh'))
/* Prints {
    name: '乌克兰格里夫纳',
    symbol_native: '₴',
    symbol: '₴',
    code: 'UAH',
    name_plural: 'Ukrainian hryvnias',
    rounding: 0,
    decimal_digits: 2
  } as in 'zh' locale */
```

## Contributing

All contributions are welcome as pull request or issues in [github repository](github.com/webplan-pro/currency-list).
Most contributions appreciated for name_plura attribute for each locale as it requires knowladge of the language.

## Credits

Prepared by [Webplan.pro](webplan.pro) from different public sources. Feel free to use it as you need in your apps or send updates into this public repository. It's under MIT license.
