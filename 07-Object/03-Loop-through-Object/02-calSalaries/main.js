// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let salariesFree = {};

function salariesSum(obj) {

  let sum = 0;

    for (let key in obj) {
        
        let insider = obj[key];
        sum += insider;
      
      } return sum;
    } 

console.log(salariesSum(salaries)) 
console.log(salariesSum(salariesFree)) 