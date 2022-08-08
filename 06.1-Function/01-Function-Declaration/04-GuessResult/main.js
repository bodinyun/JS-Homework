// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function sayHi(name) {
  let name = "Guest";
  console.log(name); // * syntax error เพราะ let name ชื่อซ้ำกับ parameter ของ sayHi(name) 
}

sayHi("Jim");

