// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

console.log(arr[2]()); // * a, b, function() { alert(this);}


