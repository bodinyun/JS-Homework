- จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
- execute deleteTask(1)

```js
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

```


// deleteTask(id) 

function deleteTask(id) {

    let foundIndex = tasks.findIndex((item)=> item.id === id)

    foundIndex !== 1 && tasks.splice(foundIndex,1)
    // if(foundIndex !== -1) {
    //     tasks.splice(foundIndex,1)
    // }

}

deleteTask(2)
console.log(tasks)
deleteTask(3)
console.log(tasks)