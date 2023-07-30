console.log("----------------------------------------");
function check(number) {
    if (number%2==0) {
        console.log(`${number} is Even Number`);
        
    }
    else{
        console.log(`${number} is Odd Number` );
    }
}
check(45);
check(70);
check(67);
check(98);
console.log("----------------------------------------");

function Check(values) {
    var le=values.length
    if (le >= 10) {
        console.log(`String is more than 10`);       
    }
    else{
        console.log(`sting is less than 10`);
    }
}
Check("JavaScript-ES6")

console.log("----------------------------------------");

function st(v) {
    var j="Java";
    if (v.startsWith(j)) {
        console.log(`yes string start with java`);

    }
    else{
        console.log(`string not start with java`);
    }   
        
}
st("Java script Language");


 
    

