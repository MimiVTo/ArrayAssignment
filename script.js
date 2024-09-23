
// VARS

var numbers = [3, 4, 5, 2, 9];

// COMMAND OR CALL TO -----------------

push(51);
pop();

// FUNCTIONS -----------------

function push(newNum){
    numbers[numbers.length] = newNum;
    console.log(numbers);
}

function pop(){
    var riddenNum = numbers[numbers.length-1];
    console.log(riddenNum);
}

function toString(){

}

function join(){

}

function concat(){

}