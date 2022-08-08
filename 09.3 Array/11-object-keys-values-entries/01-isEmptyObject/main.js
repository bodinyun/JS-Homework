// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

function checkEmptyObj(obj) {

    if (obj !== ""){
        return true;
    } else {
        return false;
    }

}

console.log(checkEmptyObj(["Tiger"]));