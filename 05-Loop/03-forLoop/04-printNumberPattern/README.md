ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8


```

หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n


// PRINT * 4 


// let result = "";
// for(let i = 0; i < 4; i++){
//     // console.log(i)
//     result += "* "  // "" + "* " ==> "*"
//     console.log(result.trim())
// }


// PRINT * 1

let result = ""

for(let i = 0; i < 8; i++){
    // i = 0
    // i  = 1  // j = 0 , j = 1
    // i = 2   // j = 0 , j = 1 , j = 2
    for(let j = 0; j <= i; j ++) {
    // i = 0 => j = 0 , j = 1 ,j = 2 ,j = 3
    
    // if(j<=i) {
    //     result += "* "
    // }
      result += `${j+1} `
        
    }

    result = result.trim() + "\n"

    // result += "*"
    // result += "\n"
}

console.log(result)


