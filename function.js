function add(a, b) {
    return a + b;
}

//This function take parameters and return a result
function circle(r){
    const PI = 3.14
    return  PI * r * r
}

// This function does not take parameters and print out the result
function greet(){
    console.log("Hello!")
}

// This function take parameters and print out the result
function sayHello(name){
    console.log(`Hello ${name}`)
}
let result = add(4,5);   //Call the function and store the result in the variable
result + 2;
console.log(result)

// Calling functions
console.log(circle(3))
greet()
sayHello("Thin")

/////////////////////Default Value////////////////////////////////

// Set default value in parameters to avoid Error when only one value is passed in
function multiply(a, b = 1){ // Default value will work when the second parameter is missing
    return a * b
}

console.log(multiply(1))
console.log(multiply(4,5))

/////////////////////Rest Parameters////////////////////////////////

function divide(a,b, ...c){ // c store the rest of the element in the array
    console.log(c)
}

divide(1,2,3,4,5,6)

/////////////////////Function Expression////////////////////////////////

// storing function in a variable
let greets = function greeting(){
    console.log("Hello, world")
}

greets() //Calling variable that has function

/////////////////////Anonymous/Nameless Functions//////////////////////////////// 

// storing anonymous function in a variable but function name does not require
let intro = function() {
    console.log("Let's introduce")
}

intro() //Calling function

/////////////Function that take function expression as argument////////////

function twice(num, fun){
    let result = fun(num) //callback function
    return result * 2
}

console.log(
twice(5, function(x){ //calling function twice
    return x + 1
}))

////////////////////////////////Arrow Functions////////////////////////////////

let addition = (a, b) => a + b //can remove function keyword for Arrow functions
console.log("Arrow Function " + addition(4,9))

let two = n => n * 2 //No need to put paranthesis for one parameter in Arrow functions
console.log("Function with one argument " + two(3))

let hello = () => "Hello, world!" // require () when there is no parameters
console.log(hello())


function welcome(){
    let name = "Welcome"
    console.log(`Welcome ${name}`)
}
welcome()

document.querySelector("#box1").textContent = "Hello <b>DOM</b>"
document.querySelector("#box2").innerHTML = "Hello <b>DOM</b>"