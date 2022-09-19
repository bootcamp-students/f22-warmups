function arrayPlusArray(arr1, arr2) {

    let sum = 0;

    for (var i of arr1) {
        sum += i;
    }
    for (var i of arr2) {
        sum += i;
    }
    return sum;
}
