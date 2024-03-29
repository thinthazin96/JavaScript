//OOP
//create an object
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        //"this" keyword is an alias for the name of the object.
        var calculation = this.shoes * this.stateTax; // This is same as purchase1.shoes * purchase1.stateTax
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.stateTax; // This is same as purchase1.shoes * purchase1.stateTax
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();
console.log("---------------------------------------------------------")

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
console.log(bicycle.bell());
console.log(door.bell());

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle)
console.log("---------------------------------------------------------")

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
//Eagle is the sub-class of Bird
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
//Penguin is the sub-class of Bird
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
//create object of Eagle class || instantiate objects of the Eagle class
var baldEagle = new Eagle();
//create object of Penguin class
var kingPenguin = new Penguin();
//call method
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
console.log("---------------------------------------------------------")

//Inheritance
//Prototype
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers:true
}
//create new object of bird object
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathers: ", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1)
console.log("penguin1 has feathers: ", penguin1.hasFeathers)
console.log("penguin1 can fly: ", penguin1.canFly)

var eagle3 = Object.create(bird);
console.log("eagle3 can fly: ", eagle3.canFly);
console.log("---------------------------------------------------------")

class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log('Lights on?', this.lightsOn);
    }
    //prints out the properties on the object instance it is called on
    getSelf(){
        console.log(this);
    }
    //the prototype of the object instance of the Train class
    getPrototype(){
        //prototype holds all the properties shared by all the object instances of the Train class
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
console.log("---------------------------------------------------------")

//inherit from Train class
class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn); //take the properties from Train class
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status: ', this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
console.log("---------------------------------------------------------")

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
console.log("---------------------------------------------------------")

//Default Parameters
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6