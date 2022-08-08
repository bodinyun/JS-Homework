// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 

let str = '31 45 12 67 34 86 23 37 19 41';

let arr = str.split(' ');

console.log(arr)

let total = arr.reduce((sum,current) => (current < 40) ? sum += current, 0);
// let result = nums.reduce((sum, current) => sum * current,1)

console.log(total)
