const state1 = { username: 'john', point: 100, loading: true };


// const state2 = Object.assign({},state1,{loading : false, point : 75,success : true })

// console.log(state1)
// console.log(state2)

const cloneState = {};

Object.assign(cloneState,state1, {point: 75, loading: false, success: true});

console.log(cloneState);
console.log(state1)