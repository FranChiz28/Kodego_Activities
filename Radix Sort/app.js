    // this function will return the highest digit among the variables in the array
    function getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            };
        };
        return max;
    };

    // counting Sort will be the sub-routine to be used for this sorting method
    function countingSort(arr, exp) {
        let n = arr.length;
        let output = new Array(n);
        let count = new Array(10).fill(0);

        //this for loop will be used to count the occurrence of the digit being targeted
        for (let i = 0; i < n; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        };
        console.log(`Count Array when working on ${exp}th place:`, count);
        //this for loop will count the occurrences cumulatively
        for (let i = 1; i < 10; i++) {
            count[i] += count[i-1];
        };
        console.log(`Cumulative Count Array when working on ${exp}th place:`, count);
        //this for loop is to build the output array starting from the last item
        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        };
        console.log(`Temporary Output Array when working on ${exp}th place:`, output);
        //this for loop is to transfer the existing value from the floating output array to the final array
        for (let i = 0; i < n; i++) {
            arr[i] = output [i];
        };
    };

function radixSort(arr) {
    let max = getMax(arr);

    //this for loop is to create the value for each digit position from least significant digit to most significant digit
    for (let exp = 1; Math.floor(max/exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    };
};

let arr = [5, 78, 54, 109, 603, 7, 32, 800, 301, 400];
// [ 2, 8, 5, 10, 3, 9, 4, 1]
function jsRunRadix() {


// Time Complexity
let start = Date.now();
radixSort(arr);   // change value of function
let timeTaken = Date.now() - start;
console.log("Final Sorted array:", arr);
console.log("Total time taken : " + timeTaken + " milliseconds");
}

function jsShowArray(){
    console.log("Original array:", arr);
}

