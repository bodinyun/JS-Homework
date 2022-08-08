// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let inputOne = prompt(" Input First Number ");
let inputSecond = prompt(" Input Second Number ");

if (inputOne == null || inputOne == " " || inputOne.trim == "" || isNaN(inputOne)
    || inputSecond == null || inputSecond == " " || inputSecond.trim == "" || isNaN(inputSecond)) {

    alert("Invalid Number");

}   else {

    alert(Number(inputOne) + Number(inputSecond));

}   

    