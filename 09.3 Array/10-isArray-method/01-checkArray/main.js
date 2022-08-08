// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 

function checkArray(input) {

    if (Array.isArray(input)) {
        return true;
    } else {
        return false;
    }
}



console.log(checkArray(["Modern Dog", "45"]))
console.log(checkArray("Modern Dog"))