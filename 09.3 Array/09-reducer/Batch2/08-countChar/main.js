// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str


let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

// 1. lowercase
// 2. spli

let lowercase = str.toLowerCase()

const arr = lowercase.split("");

console.log(arr);

const result = arr.reduce(function(acc,char){

    if (char.trim() !== "") {

    //     let fKey = acc[item]
    //     if (!fKey) {
    //     acc[item] = 1
    //     }   else {
    //     acc[item] = acc[item] + 1
    // }
    // }
    // return acc;
    acc[char] = acc[char]? acc[char]+1 : 1
    }
    return acc;
},{})

result