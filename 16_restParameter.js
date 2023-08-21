function add(num1, num2, ...nums) {
    let sum = num1 + num2;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

console.log(add(5, 6)); 
console.log(add(9, 5, 6)); 
console.log(add(78, 90, 51, 68)); 
console.log(add(89, 90, 45, 78, 90, 51, 68)); 

