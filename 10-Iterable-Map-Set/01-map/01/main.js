// - จงสร้าง Map เก็บไว้ในตัวแปรชื่อ map
// - เพิ่ม key ชื่อ name และ age มี value เท่ากับ Thomas และ 31 ตามลำดับ
// - แก้ไข value ใน key ชื่อ name ให้มีค่าเท่ากับ Dan
// - ลบ key ชื่อ age
// - ตรวจสอบว่าใน map มี key ชื่อ birthDate หรือไม่
// - หาจำนวนของ key-value ใน map
// - ลบข้อมูลทั้งหมดใน map 

const map = new Map()

map.set('name','Thomas')
console.log(map);
map.set('age',31)
console.log(map);
map.set('name','Dan')
console.log(map);
map.delete('age')
console.log(map);
map.has('birthDate')
console.log(map); 
map.size
console.log(map);
map.clear()
console.log(map);