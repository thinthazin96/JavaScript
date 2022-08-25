//create a class
class Car{
    //constructor accept parameters to use as object's properties later
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!");
    }
}

//create object/instance of a class Car
var car1 = new Car();

//access the function in the class
car1.turboOn();