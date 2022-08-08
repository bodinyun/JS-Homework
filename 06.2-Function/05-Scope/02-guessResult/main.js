// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}

let name = 'John';
let work = makeWorker();
work(); // * Pete เพราะมีการ let name ใน function ซึ่งเป็น local การ let john ข้างนอกจึงไม่มีผลกระทบกับสิ่งที่อยู่ใน scope
