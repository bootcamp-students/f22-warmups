//while n > 0, m > 0
//split chocolate bar length x width into squares
//square is 1x1
//return minimum number of breaks needed

function breakChocolate(n,m) {
    if (((n === 0) || (m === 0)) {
      return 0;
    } else {
      return (n * m)-1;
    }      
};
