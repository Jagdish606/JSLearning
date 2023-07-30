var check =function (values) {
    if (values <= 0 || values > 130) {
        console.log(`${values} is Invalid data`);
    } else{
        if (values < 18) {
            console.log(`${values} You are not eligible for vote`);
            
        }
        else{
            console.log(`${values} You are eligible for vote`);
        }
    }

    
}
check(45);check(17);check(8);check(20);
check(-10);check(200);check(0);
check(null);