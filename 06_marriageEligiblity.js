function check(gender, age) {
    if ((gender=="Male" && age>=21) || (gender=="Female" && age>=18)) {
        console.log(`${gender} age is ${age} You are eligible for marriage`);
    }
    if ((gender=="Male" && age<=21) || (gender=="Female" && age<=18)) {
        console.log(`${gender} age is ${age} You are not eligible for marriage`);
    }    
    if (gender=="Other") {
        console.log(`${gender} age is ${age} Please enter valid input`);
    }
}
check("Male",17),check("Male",25),check("Female",28),check("Female",16),check("Other",35),check("Other",41);

console.log("-----------------------------------------------------------------------------------------------------");

var leapYear = function (year) {
    if (typeof year !== "number" || isNaN(year)) {
        console.log(`${year}  Invalid Data`);
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }

};
leapYear(2020),leapYear(1999),leapYear(1600),leapYear(2022),leapYear(1945),leapYear(null),leapYear("Twenty Twenty"),
leapYear(undefined),leapYear(NaN),leapYear(1750);