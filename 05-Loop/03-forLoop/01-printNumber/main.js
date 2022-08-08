// ให้เขียนโค้ดเพื่อแสดงเลขคู่ตั้งแต่ 1 - 100 

let evenNum = [];

for (i = 0 ; i <= 100 ; i++) {

    if (i % 2 == 0) {
        evenNum += i;
        evenNum += " , "
    } 

}

console.log(evenNum);