// set var to linked list
let list = [];
// set var to position of nodes in the list
let listHead = null;
let listTail = null;
let currentLength = 0;

console.log(list);

function addElement() {
let newItem = document.getElementById('js_input_item').value;
let positionDesired = document.getElementById('js_desired_position').value;
let lastPosition = currentLength + 1;
let actualPosition = positionDesired - 1;

// add newItem to linked list
    //no element in the list yet
if (currentLength == 0 && positionDesired >= 1) {
    alert('Current list is empty! Item is added as the first in the list!')
    list.push(newItem);
    currentLength++;
    console.log(list);
} else if (currentLength >= 1 && positionDesired == lastPosition) { // add new element as the tail of the list
    list.push(newItem);
    currentLength++;
    console.log(list);
} else if (currentLength >= 1 && positionDesired > lastPosition) { // add element as not the tail of the list and exceeds the length of the list
        if (confirm('Desired Position exceeded the contents of the list! Proceed with adding to last?') == true){
         list.push(newItem);
         currentLength++;
         console.log(list);
         } else {
         alert(`Please change Desired Position! Max Input Value = ${currentLength+1}`);
         };
} else if (currentLength >= 1 && positionDesired == 1 ) { // add element as head of the list
    listTail = list;
    list = [];
    list.push(newItem);
    for (let i = 0; i < listTail.length; i++) {
        list.push(listTail[i]);
    };
    currentLength++;
    console.log(list);
    listTail = null;
} else if(currentLength >= 1 && positionDesired > 1 && positionDesired <= currentLength) { // add element  in the middle of the list    
    listHead = list;
    listTail = list;
    let originalLength = currentLength - 1;
    list = [];
    for (let i = 0; i < actualPosition; i++){
        list.push(listHead[i]);
    };
    list.push(newItem);
    for (let i = actualPosition; i <= originalLength; i++) {
        list.push(listTail[i]);
    };
    currentLength++;
    console.log(list);
    listHead = null;
    listTail = null;
};


}





function searchElement() {
    let searchedItem = document.getElementById('js_input_search').value;
    for (let i = 0; searchedItem <== list[i]; i++) {
        if (searchedItem === list[i]) {
            return i;
        } else {
            console.log('not found!');
        }
    };
}

// Time Complexity
let start = Date.now();
searchElement(5);   // change value of function
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
