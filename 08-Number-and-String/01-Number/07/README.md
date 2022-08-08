จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

function randomDice () {

    return 1 + Math.floor(Math.random()*6)    
    // 5.99999 => ปัดขึ้น  7 // 0.0015 ==> ปัดลง 0
}

console.log(randomDice())