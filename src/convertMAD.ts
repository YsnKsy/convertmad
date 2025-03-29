export type CurrencyUnit = "dirham" | "rial" | "centime"

/**
 * A mapping of currency conversion rates between different currency units.
 * 
 * The `conversionRates` object is a nested record where the outer keys represent
 * the source currency unit, and the inner keys represent the target currency unit.
 * The values are the conversion rates from the source currency to the target currency.
 * 
 * Supported currency units:
 * - `dirham`: The base currency unit.
 * - `rial`: A secondary currency unit.
 * - `centime`: A fractional currency unit.
 * 
 * Conversion rates:
 * - `dirham` to other units:
 *   - 1 `dirham` = 20 `rial`
 *   - 1 `dirham` = 100 `centime`
 * - `rial` to other units:
 *   - 1 `rial` = 1/20 `dirham`
 *   - 1 `rial` = 5 `centime`
 * - `centime` to other units:
 *   - 1 `centime` = 1/100 `dirham`
 *   - 1 `centime` = 1/5 `rial`
 * 
 * This structure allows for quick lookup of conversion rates between any two
 * supported currency units.
 */
const conversionRates: Record<CurrencyUnit, Record<CurrencyUnit, number>> = {
    dirham: { dirham: 1, rial: 20, centime: 100 },
    rial: { dirham: 1 / 20, rial: 1, centime: 5 },
    centime: { dirham: 1 / 100, rial: 1 / 5, centime: 1 }
}

/**
 * Converts a monetary value from one currency unit to another.
 *
 * @param value - The monetary value to be converted.
 * @param from - The currency unit of the input value.
 * @param to - The target currency unit for the conversion.
 * @returns The converted monetary value in the target currency unit.
 * @throws {Error} If the conversion between the specified currency units is not supported.
 */
export function convertMAD(value: number, from: CurrencyUnit, to: CurrencyUnit): number {
    if (!conversionRates[from]?.[to]) {
        throw new Error("Conversion non prise en charge")
    }
    return value * conversionRates[from][to]
}

/**
 * Converts a monetary value from one currency unit to another.
 *
 * @param value - The monetary value to be converted.
 * @param from - The currency unit of the input value.
 * @returns An object with a `to` method that accepts the target currency unit
 *          and returns the converted value.
 * @throws {Error} If the conversion between the specified currency units is not supported.
 * @example
 * const amount = 1;
 * const converted = ConvertMAD(amount, 'dirham').to('centime');
 * console.log(converted); // Outputs the converted amount in centime, 100
 */
export function ConvertMAD(value: number, from: CurrencyUnit): {
    /**
     * method that accepts the target currency unit
     * @param to - "dirham" | "rial" | "centime"
     * @returns number
     * @throws {Error} If the conversion between the specified currency units is not supported.
     * @example
     * const amount = 1;
     * const converted = ConvertMAD(amount, 'dirham').to('centime');
     * console.log(converted); // Outputs the converted amount in centime, 100
     */
    to: (to: CurrencyUnit) => number
} {
    return {
        to: (to: CurrencyUnit) => convertMAD(value, from, to)
    }
}