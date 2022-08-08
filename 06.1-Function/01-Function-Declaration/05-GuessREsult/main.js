// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // * From Matt to Salah 
// sendTo(null); // ** From null to undefined

 // ......................


const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** Fromm CC to Max (CC คือ ค่า default)
sendTo("Ben", "Jay"); // **** From Jay to Ben
// ......................
