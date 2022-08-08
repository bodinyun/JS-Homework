// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

let sum = 0;
let count = 0;
let avg;
let input;

do {

    input = prompt("Input Number");
    if (input !== 0) {
        sum += input;
        count++;
    } 
    
} while (input == 0) {
    if (count > 0) {
        avg = sum / count;
        console.log(avg); 
    }
}
    
