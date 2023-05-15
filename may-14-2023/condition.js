var wifiPass = "Daffodil1234";

if (wifiPass === "Daffodil1234") {
    console.log("Connected");
}else{
    console.log("Password Error!");
}

var age = -15;

if(age > 0 && age <= 12) {
    console.log("You are a baby!");
}else if(age > 12 && age <= 19){
    console.log("You are a teenager");
}else if(age > 19 && age <= 29) {
    console.log("You are a young person");
}else if (age > 29 && age < 50) {
    console.log("You are a middle aged person");
}else if(age >= 50 && age < 150) {
    console.log("You are an old person");
}else{
    console.log("You are not in this world!");
}

// switch
var city = "Savar";

switch (city) {
    case "Cox Bazar":
        console.log("We are in Cox Bazar");
        break;
    
    case "Dhaka":
        console.log("We are in Dhaka");
        break;

    default:
        console.log("We are not in this world");
        break;
}


