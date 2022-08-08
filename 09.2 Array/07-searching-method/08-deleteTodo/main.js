const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function delTask(id) {

    const newArray = tasks.slice(0);

    let searchIndex = newArray.findIndex (item => item.id === id)
     
    if(searchIndex !== -1) { 
        newArray.splice(searchIndex,1)
    } 
    return newArray
}

const tryNew = delTask(2)
console.log(tryNew)

