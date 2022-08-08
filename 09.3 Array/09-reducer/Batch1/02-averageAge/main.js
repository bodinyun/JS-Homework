// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

function getAverageAge(array) {
    let sumAge = array.reduce(function(acc,item) {
    
        let age = item.age;
        return acc + age;

    },0)

    let avrAge = sumAge/array.length;
    return avrAge;
}

console.log(getAverageAge(arr));