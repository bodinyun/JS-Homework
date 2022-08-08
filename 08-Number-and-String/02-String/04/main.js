// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  
// 		xxx, porn, sex ตามลำดับ


function wordDectection (str) {
    // #1 Normalize
    let lowerStr = str.toLowerCase()

    // #2 Check
    let isMatch = lowerStr.includes('xxx') || lowerStr.includes('porn') || lowerStr.includes('sex')

    return isMatch
}

console.log(wordDectection("sex"))
console.log(wordDectection("porn"))
console.log(wordDectection("xxx"))

console.log(wordDectection("SEX"))
console.log(wordDectection("PORN"))
console.log(wordDectection("XXX"))

console.log(wordDectection("SeX"))
console.log(wordDectection("pOrN"))
console.log(wordDectection("XxX"))

console.log(wordDectection("S1X"))
console.log(wordDectection("P0RN"))
console.log(wordDectection("X7X"))