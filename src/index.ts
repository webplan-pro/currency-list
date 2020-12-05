import * as currencyList from "./currency-list.json"
class CurrencyList {
    currencyList: {
        [locale: string]: {
            [code: string]: {
                name: string,
                symbol_native: string,
                symbol: string,
                code: string,
                name_plural: string,
                rounding: number,
                decimal_digits: number
            }
        }
    }

    constructor() {
        this.currencyList = currencyList
    }
    public getAll() {
        return this.currencyList
    }
    public get(currency_code: string, locale_code: string = 'en_US') {
        return this.currencyList[locale_code][currency_code]
    }
}
export default new CurrencyList()
