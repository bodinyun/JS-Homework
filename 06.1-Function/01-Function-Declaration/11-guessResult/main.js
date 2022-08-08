// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ไม่ alert เพราะมีการใส่วงเล็บในการเรียกใช้งาน funciton sayHi()/ return undefined
console.log(sayHi(10)); // ** alert ปกติ เพราะมีการใส่วงเล็บ 10 เรียกใช้งาน funciton / return undefined
// ```


// function sayHi(name) {
//   if (name) {
//     alert("Hi " + name);
//     return;
//   } else {
//     return "Who are you";
//   }
// }
// console.log(sayHi("John")); // *** alert Hi John / return undefined
// console.log(sayHi()); // **** return who are you


