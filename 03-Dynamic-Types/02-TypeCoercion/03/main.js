
let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);

// a = 1 * "4" + +null + +" " - "5" * 2 + +('90')
// a = 1 * "4" + +null + +" " - "5" * 2 + 90
// a = 4 - 10 + 90
// a = 84

console.log(a);