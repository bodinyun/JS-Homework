// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข


let number = +prompt("EnterNumber")
let count = 0;

while(number){
    let remainder = number % 10 // 6
    number = (number - remainder) / 10 // 459
    count++;
}
alert(count);