var uniqueInOrder=function(iterable){
    const blah = []
  
      for(let i = 0; i< iterable.length; i++){
        if(iterable[i] !== iterable[i+1]){
          blah.push(iterable[i])
          console.log(blah)
        }
      }
      return blah
      }
    
  //   const unNeeded = []
  //   const noDups = test.reduce(
  //   (a, b) => {
  //     const myArray = iterable;
  // const myArrayWithNoDuplicates = myArray.reduce(
  //   (previousValue, currentValue) => {
  //     if (!previousValue === (currentValue)) {
  //       return [...previousValue, currentValue];
  //     }
  //     return previousValue;
  //   },
  //   [],
  // );
  
  // console.log(myArrayWithNoDuplicates)
  //     if (a === b) {
  //      test = test.splice[b]
  //       console.log(test)
  //       return [... a, b]
  //     }
  //     return a;
  //   },
  //   [],
  // );
  //    console.log(test)
  // console.log(noDups)
  //   }
  
    //your code here - remember iterable can be a string or an array
  