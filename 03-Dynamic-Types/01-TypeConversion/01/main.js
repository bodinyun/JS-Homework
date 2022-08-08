

// String(undefined) ==> "undefined" ==> NaN
// Number(undefined) ==> NaN


// d = String(a);
// e = ""+b;
// f = `${c}`




let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = ""+b;
let f = `S{c}`;

console.log("d:",d)
console.log("e:",e)
console.log("f:",f)