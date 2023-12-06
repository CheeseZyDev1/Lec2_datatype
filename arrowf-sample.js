//arrow fuction with two arguments  
const sum = (firstParam, secondParam)=> {
     return firstParam + secondParam;
};
console.log(sum(2, 5));//print 7

//arrow func with no argument
const printhello = ()=>{
    console.log("Hello");
};
printhello(); 

//arrow function with one argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms`);
};
checkWeight(25); // print weight 25 

// concise arrow func
const multiply = (a,b) => a * b ;
console.log(multiply(2 ,30)) //print 60
