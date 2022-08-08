let a = undefined;
let b = null;
let c = b + '4 2';

let d = Number(undefined);
// Number(undefined) = NaN
let e = +b;
// Number(null) = 0
let f = c*1;
// Number(null + strinf = NaN )

console.log("C:",c)
console.log("D:",d)
console.log("E:",e)
console.log("F:",f)
