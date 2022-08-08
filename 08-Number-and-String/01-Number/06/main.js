// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

function randomNum (min,max) {

    let range = Math.random() * (max-min);
    return (min+range).toFixed(1);

}

console.log(randomNum(1,10))









