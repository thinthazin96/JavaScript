function doubleIt(num){
    return num * 2
}

//This function return object
function objectMaker(val){
    return{
        prop: val
    }
}

objectMaker(doubleIt(100)); // {prop: 200}

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())