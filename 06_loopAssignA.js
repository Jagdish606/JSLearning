console.log("*******************************************************************************");
function vowel(str) {
    let count=0;
    for (let index = 0; index < str.length ; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
            console.log(char);
            count= count+1;    
            }
        
    }
    console.log(`Total number of vowels is: ${count}`);
    
}
vowel("I am very good UI Developer");

console.log("*******************************************************************************");

function sum() { 
    let add=0;
    for (let num = 1; num <=5; num++) {
        cube=num*num*num;
        console.log(cube);
        add=add+cube
    }

    console.log(`Sum of first five numbers is :${add}`);
    
}
sum(1),sum(2),sum(3),sum(4),sum(5);
console.log("*******************************************************************************");

function odd(string){
    let revstr = "";
    for(let i=0;i<=string.length-1;i++){
        let chr = string.charAt(i);
        if(i%2==1 && chr!=" ")
        { revstr = revstr + chr +" "; } }
        console.log(`"${string}" and its Odd position Charators are : ${revstr}`);}odd("Hard work are always pays back");
        console.log(`-------------------------------------`);odd("Soon I will be Angular champ")

function reverese(str1){ 
    let revstr=""; 
    for(let i=str1.length-1;i>=0;i--)
    { let chr = str1.charAt(i); 
        if(chr!=" ")
        { revstr = revstr + (chr); }
    } console.log(`"${str1}" after reverse it will be :"${revstr}"`);}reverese("Hard work are always pays back");console.log(`------------------------------`);reverese("Soon I will be Angular champ")        