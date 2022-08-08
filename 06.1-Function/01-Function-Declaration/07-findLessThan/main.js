// ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function min(par1,par2) {
    if(par1 > par2) {
        console.log(par2);
    } else if (par2 > par1) {
        console.log(par1);
    }
} 

min(15,12);
min(10,12);
min(11,16);