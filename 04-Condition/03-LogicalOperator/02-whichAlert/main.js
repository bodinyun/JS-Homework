// โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน


if (-1 || 0) alert("first");
// true || false -> alert
if (-1 && 0) alert("second");
// true && false -> not alert 
if (null || (-1 && 1)) alert("third");
// false || true -> alert