ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0


```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
```


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};


// INPUT : Object 
// OUTPUT : sum of salaries ==> number

let calSalaries = function (obj) {
  let sum = 0

  for(let key in obj){
    let currentSalary = obj[key] // obj.John, obj.Ann, obj.Pete || obj['John'], obj['Ann'] ,obj['Pete']  
    sum += currentSalary
    // sum += obj[key]
  }


  return sum
}

console.log(calSalaries(salaries))