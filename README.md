# ConvertMAD

A JavaScript/TypeScript utility to convert Moroccan Dirham (MAD) to other subunits (Centime, Rial) and vice versa.

## Installation

```bash
    yarn install @ysnksy/convertmad
```

## Usage

### Example Use Case [ declare global ]

```javascript
    import '@ysnksy/convertmad/global' // <== declare global

    const amount = 1;
    const converted = amount.from('dirham').to('centime');
    console.log(converted); // 100
```
This code extends the prototype of the native Number object in TypeScript to add a custom method called `from`. This method enables monetary conversions in a fluent and intuitive manner using a chainable interface. The `declare global` statement is used to extend the global `Number` interface. This allows the `from` method to be added to all `Number` objects in the project. The `from` method accepts a parameter `from` of type `CurrencyUnit` (defined as `"dirham" | "rial" | "centime"`) and returns an object containing a `to` method.

### Example Use Case [ ConvertMAD ]

```javascript
    import { ConvertMAD } from '@ysnksy/convertmad'

    const result = ConvertMAD(1, 'dirham').to('centime');
    console.log(result); // 100
```

The `ConvertMAD` function is a utility function that simplifies the conversion of amounts between different monetary units defined in the `CurrencyUnit` type (namely "dirham", "rial", and "centime"). It encapsulates the conversion logic in a fluent interface, making its usage intuitive and readable.