// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก

// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น

// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย



let input;
let guess;
let count = 0;

input = prompt("Player 1 : Input Yout Number Between 1-99");

do {

    guess = prompt("Payer 2 : Input Your Number");
    if (guess == input) {
        alert(`(That's Correct. You've been played ${count} times.)`);
    } else if(guess > input) {
        alert("Too High");
    } else if (guess < input) {
        alert("Too Low");
    } count++;

} while (guess !== input)