// จงหา unique array element ของ alphabets 

let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

// input 
// output เก็บตัวไม่ซ้ำ

const uniqArray = alphabets.reduce((acc,char) => {

    if(!acc.includes(char)) {
        acc.push(char)
    }
    return acc

}, [])


uniqArray
