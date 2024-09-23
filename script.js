
// VARS

var numbers = [3, 4, 5, 2, 9];
var word = "Mimi";
var word2 = "To";

// COMMAND OR CALL TO -----------------

push(28);
pop(numbers);
concat(word, word2);

// FUNCTIONS -----------------

function push(newNum){
    numbers[numbers.length] = newNum;
    console.log(numbers);
}

function pop(list){
    var riddenNum = list[list.length-1];
    console.log(riddenNum);
}

function toString(){

}

function join(){

}

function concat(firstWord, secondWord){
    var connectedWord = firstWord + secondWord;
    console.log(connectedWord);
}