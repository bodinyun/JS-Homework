// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา


let keywordStop = 'stop';

function inputObj () {

    let result = {};
    let key;
    let value;

    do {

    key = prompt("Input Keyword");
    value = prompt("Input Value");

    if(key !== null && key.trim !== '' && key !== keywordStop && value !== keywordStop) {
        result[key] = value
    } 

    } while (key !== keywordStop && value !== keywordStop)
    
    return result;
}

console.log(inputObj());


