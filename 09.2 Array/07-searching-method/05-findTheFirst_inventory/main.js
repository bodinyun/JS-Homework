//จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries



const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
// expected result: { name: 'cherries', quantity: 5 }

let findCherries = inventory.findIndex( item => item.name === 'cherries');
console.log(inventory[findCherries])