// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

function ucFirst(str) {
    // let firstChar = str[0]
    if(!str){
       return "This function not allow for empty string"
    }

    let newString = str.trim()
    let firstChar = newString.slice(0,1)
    let remainString = newString.slice(1)

    return firstChar.toUpperCase() + remainString
}

console.log(ucFirst("hello It's me"))
console.log(ucFirst(""))
console.log(ucFirst("    hello It's me     "))