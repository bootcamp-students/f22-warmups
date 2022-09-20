function isDivisible(n, x, y) {
    //ternary oporator
      //if the remainder of n/x = 0
      //AND
      //if the remainder of n/y = 0
      //Then return true
      //else return false
      /*return(n ? ((n%x) && (n%y)) : 0 )*/
      if (((n%x)==0) && ((n%y)==0)) {
        return (true)
      }
      else {
       return (false)
      }
    }