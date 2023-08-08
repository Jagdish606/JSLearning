const arrayFruits =["Banana","Orange","Apple","Mango","Watermelon"];
var t=arrayFruits[0]
var d=arrayFruits[4]
console.log(`First element is ${t} ,Last element is ${d}`);

arrayFruits.unshift("PaPaya")
console.log(arrayFruits);

arrayFruits.splice(4,1);
console.log(arrayFruits);

arrayFruits.push("pineapple")
console.log(arrayFruits);

const arrayFruits1=['PaPaya', 'Banana', 'Orange', 'Apple', 'Watermelon', 'pineapple']
arrayFruits1.splice(4,0,"Dragon Fruit")
console.log(arrayFruits1);

let old="Orange";
let n="Kivi";
arrayFruits1[old]=n;
console.log(arrayFruits1);

