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
