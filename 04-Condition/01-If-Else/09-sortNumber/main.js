// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1


let a = prompt("Input First Number");
let b = prompt("Input Second Number");
let c = prompt("Input Third Number");

let x;
let y;
let z;

if (a > b && a > c) {

    x = Number(a) ;

    if (b > c) {

        y = Number(b);
        z = Number(c);
        console.log(x, y, z)

    } else {

        y = Number(c);
        z = Number(c);
        console.log(x, y, z)

    }

} else if (b > a && b > c) {

    x = Number(b) ;

    if (a > c) {

        y = Number(a);
        z = Number(c);
        console.log(x, y, z)

    } else {

        y = Number(c);
        z = Number(a);
        console.log(x, y, z)

    }

 

} else if (c > a && c > b) {

        x = Number(c) ;
    
        if (a > b) {
    
            y = Number(a);
            z = Number(b);
            console.log(x, y, z)
    
        } else {
    
            y = Number(b);
            z = Number(a);
            console.log(x, y, z)
    
        }

}
