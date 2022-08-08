// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } 
//       return ("Did parents allow you?");
    
//   }

// console.log(checkAge(17));
// console.log(checkAge(19));

// function checkAge(age) { return (age > 18) ? true : ("Did parents allow you?")}

// console.log(checkAge(17));
// console.log(checkAge(19));

function checkAge(age) { return (age > 18) || ("Did parents allow you?")}

console.log(checkAge(17));
console.log(checkAge(19));