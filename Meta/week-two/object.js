/*
Object is the collection of property. Property has key, value pair.
*/

//Method 1: Building Object in Objecect literal {}

//create an object
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager)               //accessing the object 
console.log(assistantManager.socialSkills) //accessing the property of the object
console.log("---------------------------------------------------------")

//Method 2: Building Object using Dot method
var house2 = {};        //create an object
house2.rooms = 4;       //create an object property 
house2.color = "pink"; 
house2.priceUSD = 12345;
console.log("Using Dot Method: ", house2, )
console.log("--------------------------------------------------------")

//Method 2: Building Object using bracket (Alternative of Dot Method)
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log("Using Bracket: ", house2)
console.log("---------------------------------------------------------")


//Evaluating Expression can be only done in bracket
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
console.log("---------------------------------------------------------")

var greeting = "Hello";
var name = "Thin";
console.log(greeting+ name)
console.log(greeting.concat(name))   //similar to join in Python.
console.log("---------------------------------------------------------")

console.log(greeting.charAt(0))     //accessing each character at certain index in a string.
console.log("---------------------------------------------------------")

//indexOf returns the location of the first position that matches a character: 
console.log("IndexOf()", "ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2
console.log("ho-ho-ho".lastIndexOf("h")); //6
console.log("---------------------------------------------------------")

console.log(".Split()","ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

console.log(".toUpperCase()",greeting.toUpperCase()); // "HELLO, "
console.log(".toLowerCase()",greeting.toLowerCase()); // "hello, "
console.log("---------------------------------------------------------")

//Properties taking function as data type.
var car = {};
car.mileage = 98765;
car.color = "red";
//Created turnTheKey method. (Property that can be executed is called method)
car.turnTheKey = function() {
    console.log("The engine is running")
}
//Created lightsOn method.
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey(); //this method can be accessed only through the car object
car.lightsOn()
console.log("---------------------------------------------------------")

var test = typeof("what is this?");
console.log("typeof() func: ", test)