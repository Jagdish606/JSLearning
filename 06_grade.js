function gradCalculation(marks) {
    if (typeof marks !== "number" || marks < 0 || marks > 100 || isNaN(marks)) {
        console.log(`${marks} Please provide valid marks`);

    }else{
        if (marks >= 90) {
            console.log(`${marks} marks Your grade is A+`);
        }    
        if(marks >= 75 && marks < 90){
            console.log(`${marks} marks Your grade is A`);

        }if(marks >= 50 && marks < 75){
            console.log(`${marks} marks Your grade is b`);
            
        }if(marks >= 35 && marks < 50){
            console.log(`${marks} marks Your grade is c, need to improvment `);
    
        }
    }
            
}
gradCalculation(98),gradCalculation(80),gradCalculation(90),gradCalculation(0),gradCalculation(-7),
gradCalculation(35),gradCalculation(29),gradCalculation(64),gradCalculation(49),
gradCalculation("91"),gradCalculation("Eighty"),gradCalculation(150),
gradCalculation(undefined),gradCalculation(null);