// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

let primeBank = " 1 , 2 , 3 , 5 , 7 ,  ";

for (i=1 ; i <= 100; i++) {

    if (i !== 1) {
        if (i % 2 !== 0) {
            if (i % 3 !== 0) {
                if (i % 5 !== 0) {
                    if (i % 7 !== 0) {
                        
                        primeBank += i;
                        primeBank += " , "

                    }
                }
            }
        }
    }
}

console.log(primeBank)