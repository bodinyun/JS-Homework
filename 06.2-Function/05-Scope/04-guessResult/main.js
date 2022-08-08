// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let x = 1;
function func() {
  console.log(x); // *  ประกาศใช้ let x ด้านล่าง หลัง console.log จึงทำให้ Error
  let x = 2;
}
func();
