ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
คูณเฉพาะ value ที่เป็น number เท่านั้น


```js
// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};


// after call function multiplyNumeric(menu, 3)
menu = {
  width: 600,
  height: 900,
  title: 'My menu'
};
```

// after call function multiplyNumeric(menu, 3)
// menu = { width: 600, height: 900,title: 'My menu'};


// INPUT : object , number
// OUTPUT : object (modified only number by multiply)

/*
CHECK each key with value FOR every key
   IF value type number 
      UPDATE value by multiply for that key 
   ELSE 
      dont update == stay the same
RETURN modified object
*/


let menu = { 
  width: 200, 
  height: 300,
  title: 'My menu' ,
  isSquare : true
}

const multiplyNumeric = (obj,num) => {
  const result = {}
  for(let key in obj) {
    let currentValue = obj[key]
    // let current = 5
    //obj[key] = current

    if(typeof currentValue === 'number') {
      result[key] = currentValue*num
    } 
    // else if (typeof currentValue === 'boolean') {
    //   result[key] = !currentValue
    // }
    
    else {
      result[key] = currentValue
    }
    // result[key]  = 5           // result['width'] , result['height']
  }
  return result
}

console.log(multiplyNumeric(menu,3))

console.log(menu)