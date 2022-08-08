// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]


function squareArr(arr) {

    let resultREC = [];

   arr.forEach(item => {
        let squareNUM = item ** 2;;
        resultREC.push (squareNUM);
   });

   return resultREC;

}

console.log((arr));
console.log(squareArr(arr));




