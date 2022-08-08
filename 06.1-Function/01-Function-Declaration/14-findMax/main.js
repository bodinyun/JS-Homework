// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

// function checkAge(age) { return (age > 18) ? true : ("Did parents allow you?")}
function max(a=0,b=0,c=0,d=0) {  
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else if (d > a && d > b && d > c) {
        return d;
    }
}

console.log(max())
console.log(max(2))
console.log(max(3,1))
console.log(max(7,3,9,2))


// return (p1 > p2 && p3 && p4)? p1 : (p2 > p1 && p3 && p4)? p2 : (p3 > p1 && p2 && p4)? p3 : (p4 > p1 && p2 && p3)? p4 : NaN