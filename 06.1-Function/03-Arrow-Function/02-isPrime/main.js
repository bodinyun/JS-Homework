const checkPrime = num => {

    let isPrime = true;

    for(let i = 2; i < num ; i++){

        if(num % i === 0){
            isPrime = false
            break;
        }
    }

    return isPrime
}

console.log(checkPrime(89))
console.log(checkPrime(12))
