// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const multiplyNumeric = (obj, num) => {

  let result = {};

  for (let key in obj) {
    let currentV = obj[key];
    if (typeof currentV === 'number') {
      result[key] = currentV * num
    } else {
      result[key] = currentV;
    }
    
  } return result;
}

console.log(multiplyNumeric(menu , 5))
