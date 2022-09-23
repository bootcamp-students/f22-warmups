function between(a, b) {
    //determine what is a
    let first = Math.min(a, b);;
    //determine what is b
    let last = Math.max(a, b);
    //determine the newArray
    let newArray = [];
    //generate the range between a and b
    //for loop i=a when; i <= b; i++
    //nextNumber = i
    for (let i = first; i <= last; i++)
    newArray.push(i);
    //pop next number into newArray
    //return newArray
    return (newArray);
        //loop
}