// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89

let result = scores.reduce((sum , current) => sum + ((current.score) * (current.weight)) ,0)
let totalW = scores.reduce((sum, current) => sum + ((current.weight)),0)
let avrSc = result / totalW

console.log(result)
console.log(avrSc)
