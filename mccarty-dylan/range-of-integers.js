//3 numbers to determine the range of integers
//input start number
//input end number 
//input number the integers increase by 
//count up to max num until reached max

generateRange(min, max, step); {
    let arr = [];
    
    for(let i = min; i <= max; i += step);

    arr.push(i);
    return arr;
}
