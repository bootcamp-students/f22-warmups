function duplicateCount(text){
            text = text.toLowerCase()
            console.log(text)
            let blankArr = [];
            let finalArr = [];
            let charArr = text.split('')
            let removed;
            for (let i = 0; i < charArr.length - 1; i++) {
               removed = charArr.splice(i, 1)

                if (charArr.includes(removed[0])) {
                    blankArr.push(removed[0])
                 }
                i -= 1
              }
              blankArr.forEach(char => {
                if (!finalArr.includes(char)) {
                  finalArr.push(char)
                }
              })
            console.log(blankArr)
             return finalArr.length
            }
