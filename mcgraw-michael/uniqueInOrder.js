
      var uniqueInOrder=function(iterable){
      //   a sentence is given in a string
      //   return a list of items in the same order, repeating the sequence as needed so no letters of same value touch
      let uniqOrder = [];
      if ( typeof iterable === 'string') {
        iterable = iterable.split('')
        }
        for (let i = 0; i < iterable.length; i++) {
        
          if (iterable[i-1] !== iterable[i]) {
            uniqOrder.push(iterable[i])
            console.log(uniqOrder)
          }
          }
          return uniqOrder
          }
