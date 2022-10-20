function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
    console.log("Array in is: ", array);
    let returnArray = array.map(x => x*2);
    console.log("Array out is: ", returnArray);
    return returnArray;
}
