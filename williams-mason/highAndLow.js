function highAndLow(numbers){
    // given a string
    //we need to turn the string into an array
    //numbers are separated by a space
    let newArray = numbers.split(' ');
    console.log('ogArray' + newArray);
    function compareNumbers (a,b) {
      return a - b;
    }
    //sort the array by lowest to highest
    newArray.sort(compareNumbers);
    //we need to return the highest and lowest numbers
    console.log('afterSort' + newArray);
    let min = newArray[0];
    let max = newArray[(newArray.length - 1)];
    let answer = [];
    answer.push(max);
    answer.push(min);
    return answer.join(' ');
    }