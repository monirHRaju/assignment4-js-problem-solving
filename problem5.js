function  resultReport( marks ) {
    if(Array.isArray(marks) !== true){
        return 'Invalid';
    }

    const output = {finalScore: 0, pass: 0, fail: 0};
    let pass = 0
    let fail = 0
    let sum = 0;

    for(let i = 0; i < marks.length ; i++) {
        sum += marks[i];
        if(marks[i] >= 40){
            pass++;
        } else {
            fail++;
        }
    }

    let finalScore = Math.round((sum / marks.length));
    if(isNaN(finalScore)){
        finalScore = 0;
    }
    
    output.finalScore = finalScore;
    output.pass = pass;
    output.fail = fail;
    
    return output;
}

console.log(resultReport(
100
))