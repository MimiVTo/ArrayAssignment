
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
        // Since the index is always -1, the next one will be the number that you pushed

}

function pop(list){

    var riddenNum = list[list.length-1];
    console.log(riddenNum);
        //Returns the last index

    list.length--;
}

function toString(wordCalled){
    var calledWord = ""+wordCalled;
    console.log(calledWord);
        //Puts it inside of the string
}

function join(array, separatorThing){

    var result ="";

    for(var i=0; i<array.length;i++){

        result+= array[i];

        if (i !== array.length - 1){
            result += separatorThing;
                //Continues onto the next thing and replaces the ", " into whatever the separator is
        }
            
    }

    console.log(result);
}

function concat(list1, list2){

    var concatList = [];
    var amount = list1.length+list2.length;

    for(var i=0; i<list1.length; i++){
        concatList += (list1[i]+" ");
        //Adds the List1 numbers
    }

    for(var i=0; i<list2.length; i++){
        concatList += (list2[i]+" ");
        //Adds the List2 numbers
    }
  
    console.log(concatList);
}