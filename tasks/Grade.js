//Grade Calculator
let grade=30;
function gradeCalculator() {
    if (grade >= 0 && grade < 60) console.log("F: 0-59");
    else if (grade >= 60 && grade < 70) console.log("D: 60-69");
    else if (grade >= 70 && grade < 80) console.log("C: 70-79");
    else if (grade >= 80 && grade < 90) console.log("B: 80-89");
    else if (grade >= 90 && grade <= 100) console.log("A: 90-100");
    else console.log("Number provided is invalid");
}

gradeCalculator();