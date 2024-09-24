
// VARS

var numbers = [3, 4, 5, 2, 9];
var OtherList = [7,4,3,2,1];
var word = "Mimi";
var word2 = "To";

// COMMAND OR CALL TO -----------------

push(28);
    //Add 28 to the array
pop(numbers);
    //Get rid of the last one of the array--gets rid of 28
toString(3);
    //Makes the word into a string
join(numbers, "--");
    //Changes whats inbetween each index
concat(numbers, OtherList);
    //connects the words

// FUNCTIONS -----------------

function push(newNum){
    numbers[numbers.length] = newNum;
    console.log(numbers);
}

function pop(list){
    var riddenNum = list[list.length-1];
    console.log(riddenNum);
}

function toString(wordCalled){
    var calledWord = ""+wordCalled;
    console.log(calledWord);
}

function join(array, separatorThing){

    var result ="";

    for(var i=0; i<array.length-1;i++){
        result += (array[i]+separatorThing+array[i+1]);
    }

    console.log(result);
}

function concat(list1, list2){

    var concatList = [];
    var amount = list1.length+list2.length;

    for(var i=0; i<list1.length; i++){
        concatList += (list1[i]+" ");
    }

    for(var i=0; i<list2.length; i++){
        concatList += (list2[i]+" ");
    }
  
    console.log(concatList);
}