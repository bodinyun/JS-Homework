// จงสร้างตัวแปรชื่อ person ซึ่งเก็บข้อมูลประเภท Object และมี property 5 ชุด ซึ่งเป็นข้อมูลของผู้เรียน ได้แก่ ชื่อ, อายุ, เพศ, ที่อยู่, เบอร์โทร

const person = {
  name : "Jack Chan",
  age : 55,
  gender : "male",
  address : "Hollywood",
  phone : "08562513622" 
}


// const person = new Object()
console.log(person)
person.name = "John Doe"
console.log(person)

person.salary = 1000;
console.log(person)

person.age = person.age+1;
console.log(person)

delete(person.gender);
console.log(person)

