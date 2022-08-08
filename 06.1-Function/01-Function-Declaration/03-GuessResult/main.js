// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * ยังไม่ผลลัพธ์เนื่องจากยังไม่มีการเรียกฟังกชั่นมาใช้
}

logMessage(message); //บรรทัดบนให้ผลลัพธ์ที่อยู่ใน Local คือ Hello everybody
console.log(message); // ** บรรทัดบนให้ผลลัพธ์ที่อยู่ใน Global คือ Welcome to Thailand

// ..................... //

let name = "John";


function sayHi(input) {
  console.log(name); // *** เพราะฟังกชั่นไปนำ name จาก Global มาใช้งาน
  name = input;
}

sayHi();
console.log(name); // **** undefined เพราะหลังจากใช้งานในฟังกชั่น name ถูกตัั้งค่าให้เท่ากับ input ซึ่งยังไม่มีการประกาศค่าใดๆ  