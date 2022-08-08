// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign


const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

// const cloneZa = {};

// for (let key in notebook) {
//   cloneZa[key] = notebook[key];
// }

// console.log(cloneZa);

const cloneZa2 = {};
Object.assign(cloneZa2,notebook);

console.log(cloneZa2);
 


