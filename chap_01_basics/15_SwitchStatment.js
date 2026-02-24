//Switch
//0-Sunday,1-Monday,2-Tuesday,3-Wednesday,4-Thursday,5-Friday,6-Saturday
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

//We use switch case for API response status code
let statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("OK");      
        break;
    case 400:
        console.log("Bad Request");     
        break;
    case 401:
        console.log("Unauthorized");     
        break;
    case 403:
        console.log("Forbidden");     
        break;      
    case 404:
        console.log("Not Found");     
        break;      
    case 500:
        console.log("Internal Server Error");     
        break;      
    default:
        console.log("Unknown Status Code");
}

//In witch we can have same value for multiple cases
let x=10;
switch(x){
    case 10:
        console.log("x is 10");
        break;
    case 10:
        console.log("x is still 10");
        break;
    default:
        console.log("x is not 10");
}