ให้เขียนโค้ดแสดงสูตรคูณตั้งแต่ แม่ 2 ถึง แม่ 12 โดยแสดงผลออกมาใน console  
2 x 1 = 2  
2 x 2 = 4  
...  
หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

let result = ""

for (let i = 2; i <= 12; i++){
    // console.log(`${i} x `)

    for (let j = 1; j <= 12; j++){ 
        result += `${i} x ${j} = ${i*j}\n` 
    }

    console.log(result)
    result = ""

}