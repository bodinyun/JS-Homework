// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->

let input = prompt("input Number")
let output = 0;
let sum = 0;

while (input) {


    output = (input % 10);
    // console.log(output)
    input = (input - output) / 10
    // console.log(input)
    
    sum += output
} 

console.log(alert(sum));

