//Predict #1
function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc()
    
//What will console.log state when this function is called?
//I was born in 1980

//Predict #2
function myBirthYearFunc(birthYearInput){
    console.log("I was born in " + birthYearInput);
}
myBirthYearFunc(1980)

//So, if the variable birthYearInput is 1980 (aka var birthYearInput = 1980), and this function is called, what would the console.log state?
// I was born in 1980 

//Predict #3
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10,20)
    
//what would the console.log state?
// Summing Numbers!
// num1 is: 10
// num2 is: 20
// 30
        