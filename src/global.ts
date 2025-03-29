import { convertMAD, CurrencyUnit } from "./convertMAD"

declare global {
    interface Number {
        /**
         * Accepts a `CurrencyUnit` = `dirham` | `rial` | `centime` as the source currency and returns An object with a `to` method for specifying the target currency unit.
         * @param from - The source currency unit.
         * 
         * @example
         * const amount = 1;
         * const converted = amount.from('dirham').to('centime');
         * console.log(converted); // Outputs the converted amount in centime, 100
         */
        from(from: CurrencyUnit): {
            /**
             * Accepts a `CurrencyUnit` as the target currency and performs the conversion, returning the result as a `number`.
             * @param to - The source currency unit.
             * 
             * @example
             * const amount = 1;
             * const converted = amount.from('dirham').to('centime');
             * console.log(converted); // Outputs the converted amount in centime, 100
             */
            to: (to: CurrencyUnit) => number
        }
    }
}

Number.prototype.from = function (from: CurrencyUnit) {
    return {
        to: (to: CurrencyUnit) => convertMAD(this as number, from, to)
    }
}