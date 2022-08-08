ผลจากการรันคำสั่งในบรรทัด * คืออะไร

```js
console.log([1, 2, 3].includes(2)); // *
console.log([1, 2, 3].includes(4)); // **
console.log([1, 2, 3].includes(3, 3)); // ***
console.log([1, 2, 3].includes(3, -1)); // ****
console.log([1, 2, NaN].includes(NaN)); // *****
console.log(['1', '2', '3'].includes(3)); // ******

```


console.log([1, 2, 3].includes(2)); // true *
console.log([1, 2, 3].includes(4)); // false**
console.log([1, 2, 3].includes(3, 3)); //false ***
console.log([1, 2, 3].includes(3, -1)); // true ****
console.log([1, 2, NaN].includes(NaN)); // true *****
console.log(['1', '2', '3'].includes(3)); //false ******