// const divideSeven = num => {
    // Sol-1
    // if(num % 7 === 0) {
    //     return true
    // } else {
    //     return false
    // }

    // Sol-2
    // return num % 7 === 0 ? true : false

    // Sol-3
    // return num % 7 === 0;
// }

// Sol-4
// const divideSeven = num => num % 7 === 0

// console.log(divideSeven(41))
// console.log(divideSeven(49))

let divBySeven = (input) => (input % 7 == 0) ? "That's correct" : "Try Again" ;
console.log(divBySeven(49));
console.log(divBySeven(50));