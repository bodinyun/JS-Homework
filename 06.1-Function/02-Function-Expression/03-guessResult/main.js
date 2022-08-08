// บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // f() *
console.log(answer(10)); // 420
console.log(magic(1)(1)); // 42
