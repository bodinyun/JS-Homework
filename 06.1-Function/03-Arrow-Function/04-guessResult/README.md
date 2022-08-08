โค้ดทั้งสองชุดด้านล่างทำงานได้เหมือนกันหรือไม่

```js
const logName = (name) => console.log(name);
const logName = name => console.log(name);
```


// const logName = (name) => console.log(name);
// SideEffect ==> Log "Codecamp"
// Return ==> result of console.log()


const logName = name => console.log(name);
logName("Codecamp")
console.log(logName("Codecamp"))