// console.log("Hello");

var a=10;//Global Scope
console.log(a);

function printAValue(){
    var a=30;//Local Scope
    console.log(a);
    if(true){
        var a=20;
    }
    console.log("F = ",a);
}

printAValue()

let b=10;
console.log(b);

function printBValue(){
    let b=20;
    console.log(b);
    if(true){
        let b=30;
        console.log(b);
    }
    console.log(b);
}

printBValue()