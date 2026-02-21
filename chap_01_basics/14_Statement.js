//if,else if,else
let age=25;
if(age>25){
    console.log("You can go goa and drink also");
}else if(age>=18 && age<=25){
    console.log("Yes, Goa but no drinking");
}else {
    console.log("Go home!");
}
//////////////////////////////////////////////

if("hello") console.log("String is truthy");//hello="truthy"
if(42) console.log("Int is truthy");//42="truthy"
if({}) console.log("{} is truthy");//{}="truthy"
if([]) console.log("[] is truthy");//[]="truthy"
if("") console.log("Won't print")//->falsy result
if(null) console.log("Won't print")//->falsy result
if(undefined) console.log("Won't print")//->falsy result
if(0) console.log("Won't print")//->falsy result
if(NaN) console.log("Won't print")//->falsy result

/////////////////////////////////////////////

let userName="Dev"
let password="secure123"
let isAccount=false

if(userName=="Dev" && password==="secure123" && !isAccount){
    console.log("Login");
}
