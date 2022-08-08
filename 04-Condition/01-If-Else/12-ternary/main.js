// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let inputOne = prompt(" Input Points");
let message;

if (inputOne == null || inputOne == " " || inputOne.trim == "" || isNaN(inputOne)) {

    alert("Invalid Number");

} else { console.log(message = inputOne > 100 ? "Cheat" 
                    : inputOne >= 80 ? "A" 
                    : inputOne >= 70 ? "B" 
                    : inputOne >= 60 ? "C" 
                    : inputOne >= 50 ? "D" 
                    : inputOne <  50 ? "F" 
                    : "")
}

