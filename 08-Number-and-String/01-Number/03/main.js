

function checkPts(cost) {

    let pts;
    pts = Math.floor(cost/100);
    return pts;

}

console.log(checkPts(100));
console.log(checkPts(115));
console.log(checkPts(2400));