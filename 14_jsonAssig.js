let studentInfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;


const convertedData = JSON.parse(studentInfo);
console.log(convertedData);

console.log("assing only dev word: ",convertedData.role[0]); 

 
console.log("---------------------------------------------------");


const fullName = convertedData.name; 
const lastName = fullName.split(" ")[1]; 
console.log("accessing last name: ",lastName); 