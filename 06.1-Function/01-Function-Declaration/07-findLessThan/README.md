ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function min(a,b) {

    // #1
    // if(a < b) {
    //     return a;
    // } else {
    //     return b
    // }

    // #3
    // if(a < b) {
    //     return a;
    // }

    // return b

    return a < b ? a : b
}

let result = min(99,5)
alert(result)