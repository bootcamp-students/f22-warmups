var makeEveryLetterAfterXCaps = function (str, letter) {
    let strArr = str.split('')
        
        for (let i = 0; i < strArr.length; i++) {
        
          if (strArr[i-1] === letter) {
            console.log(strArr[i]);
            
            strArr[i] = strArr[i].toUpperCase();
          }
          }

          return strArr.join('')
          }
