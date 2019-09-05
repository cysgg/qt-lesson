function hongbao(total,num) {
    const arr = [];
    let restAmount = total,
        restNum = num;
    for (let i = 0; i < num-1; i++) {
        let maxAmount = total / (num * 2),
            min = 0.01,
            amount = parseFloat(Math.random() * (restAmount / restNum)).toFixed(2);
        restNum--
        restAmount -= amount
        arr.push(amount)
        
    }
    arr.push(restAmount.toFixed(2))
    return arr
}

console.log(hongbao(100,10));
