// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

let keywordStop = 's';

function fruitMarket() {

    let totalOrder = {};
    let result = {};
    let key;
    let value;

    do {

        key = prompt('Order Fruit');
        value = prompt('Input Quantity');

        if (key !== null && key.trim !== '' && key !== keywordStop && value !== keywordStop) {

            
            totalOrder[key] = value;

        }
        
    } while (key !== keywordStop && value !== keywordStop) {

        // let mT1 = object[key];

        // for (let obj in key) {

        //      if (mT1 > 1) {
        //         result[key] = mT1 * 10;
        //     } 
        //     // else if (moreThanOne <= 1) {
        //     //     result[key] = value;
        //     // }

        // }
        // totalOrder.key = totalOrder.key + "s";
       result = totalOrder;

    }
    return result;    
}

console.log(fruitMarket());


