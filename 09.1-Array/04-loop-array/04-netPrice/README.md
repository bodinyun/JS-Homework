- จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
- netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)


```js
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

const summary = [
  { netPrice: 900 }, 
  { netPrice: 475 },
  { netPrice: 100 }
];


```

function calSummary(salesArray) {
    const summaryArray = []
    for(let item of salesArray) {
      let currentObj = {}
      if(item.discount) {
        netPrice = item.price * (1 - item.discount)
      } else {
        netPrice = item.price 
      }
        currentObj.netPrice = netPrice
        summaryArray.push(currentObj)
    }
    return summaryArray
}

const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

console.log(calSummary(sales))





/*
INPUT : ARRAY of sales (each item == obj)
OUTPUT : ARRAY of summary (each item == obj)
*/


function calSummary(salesArray) {

    const summaryArray = []


    // LOGIC ==> LOOP every Item

    for(let item of salesArray) {
        // # 1 item == {price : 1000, discount : 0.1}
        // # 2 item == {price : 500, discount : 0.05}
        // # 3 item == {price : 100}

        let currentObj = {}
        // Modify Object)
        let netPrice =item.price * (1 - (item.discount ?? 0))
        // if(item.discount) {
        //     netPrice = item.price * (1 - item.discount)
        // } else {
        //     netPrice = item.price 
        // }

        currentObj.netPrice = netPrice


        summaryArray.push(currentObj)
    }

    return summaryArray
}

const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];
console.log(calSummary(sales))