- จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
- ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
- ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”

function checkNotNumber (num){
    return num === null || num ===  '' || num.trim() === '' || isNaN(num);
}

// checkNotNumber(null)
// checkNotNumber('')
// checkNotNumber('                ')
// checkNotNumber("CodeCamp")
// checkNotNumber("52")


function checkNumber (num){
    return !(num === null || num ===  '' || num.trim() === '' || isNaN(num));
}

// checkNumber(null)
// checkNumber('')
// checkNumber('                ')
// checkNumber("CodeCamp")
// checkNumber("52")

let result = prompt("Enter Number")

if(checkNumber(result)){

    if(+result % 2 === 0) {
        alert("Even Number")
    } else {
        alert("Odd Number")
    }

} else {
    alert("Invalid")
}
