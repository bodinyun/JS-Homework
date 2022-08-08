// จงแปลงโค้ดเป็นแบบ if-else

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }
let browser = prompt("Input");

if (browser == "Edge") {
  alert(("You've got the Edge!"));
} else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera" ) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!")
}



