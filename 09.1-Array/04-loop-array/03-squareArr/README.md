- ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
- ตัวอย่างผลลัพธ์

const arr = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]



/*
INPUT : arr 
OUTPUT : newArr SQUARE !!
*/

function squareArr(arr) {
    const resultArr = []
    
    // Logic ==> LOOP every item

    arr.forEach((item,index) => {
        // let squareNum  =  item ** 2
        // resultArr.push(squareNum)
        // resultArr[index] = item ** 2
    })

    // for(let item of arr) {
    //     resultArr.push(item**2)
    // }

    // for(let index in arr) {
    //     resultArr[index] = arr[index] ** 2
    // }

    return resultArr
}
const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr))