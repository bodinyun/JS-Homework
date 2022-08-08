ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
- leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
- ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว


let  leapYear = (input) => {
    if (input % 4 == 0) {
        return "Leapyear";
    }
    return "Not"
}

Arrow # 9

Leap Year : หาร 4 ลงตัว
Leap Year : ผลคูณของ 100 && หารด้วย 400 ลงตัวด้วย

let isLeapYear = year => {

    if (year % 100 === 0) {
        
        if (year % 400 === 0) {
            return true
        } else {
            return false
        }

        return year % 400 === 0 ? true : false
        return year % 400 === 0
    }

    if(year % 4 === 0) {
        return true 
    } else {
        return false
    }

    return year % 4 === 0;

    if( year % 4 === 0){
        if (year % 100 === 0 && year % 400 === 0 ) {
            return true
        } else if () {
            return false
        }
    }
    }
   

console.log(isLeapYear(200))
console.log(isLeapYear(1600))
console.log(isLeapYear(32))