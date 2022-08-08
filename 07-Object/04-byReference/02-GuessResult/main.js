// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // * false เนื่องจากในการเปรียบเทียบ ตำแหน่งที่ชี้ Reference ของ user และ admin คือคนละอันกัน

