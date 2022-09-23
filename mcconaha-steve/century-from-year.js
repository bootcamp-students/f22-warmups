/*Introduction
The first century spans from the year 1 up to and including the year 100, the second century 
from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/

function century(year) {
    // FUNCTION
    // IF year is less than 101
    if (year < 101) {
    // THEN century === 1
      return 1;
    } else {
      return (Math.ceil(year / 100));
    // ELSE century === year / 100 rounded up to the nearest integer
      console.log(Math.ceil(year / 100));
    }
  };
   // ENDFUNCTION
