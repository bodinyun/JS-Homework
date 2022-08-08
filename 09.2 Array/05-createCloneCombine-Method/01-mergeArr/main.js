// ให้สร้างตัวแปร Array ที่เกิดจากการนำค่า element ใน a และ b มาต่อกัน

const a = [1, 5, 7, 11];
const b = [2, 3, 6];


let Array = a.slice() + "," + b.slice();

console.log(Array);
console.log(a.concat(b))
console.log([...a,...b])
