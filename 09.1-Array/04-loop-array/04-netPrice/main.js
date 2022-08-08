// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)


  
//   const summary = [
//     { netPrice: 900 }, 
//     { netPrice: 475 },
//     { netPrice: 100 }
//   ];

function findNetPrice (arrSales) {
    const summaryArray = [];
    for (let item in arrSales) {
        let objCurrent = {};
        let netPrice;

        if (item.discount) {
            netPrice = item.price * (1 - item.discount)            
        } else {
            netPrice = item.price
        }
        objCurrent.netprize = netPrice;
        summaryArray.push(objCurrent);
    }
    return summaryArray
}

const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

console.log(findNetPrice(sales));