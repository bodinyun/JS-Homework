


let  leapYear = (input) => {
    if ((input % 4 == 0) || (input % 400 == 0) ) {
            if (input % 100 == 0 && (input % 400 !== 0)) {
                return "Not a Leapyear"
            }
            return "Leapyear";
        }   else {
        return "Not a Leapyear."
    }
}

console.log(leapYear(8))
console.log(leapYear(84))
console.log(leapYear(10))
console.log(leapYear(1500))
console.log(leapYear(1000))
console.log(leapYear(1600))


