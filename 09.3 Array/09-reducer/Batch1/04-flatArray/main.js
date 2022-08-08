// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด


let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

// expected result: [0, 1, 2, 3, 4, 5]

function flatArray (array) {

    let oneLine = flattened.reduce((acc,item,index) => {
        return acc.concat(item)
    } , [] )
        return oneLine;
}

console.log(flatArray(flattened))


    

