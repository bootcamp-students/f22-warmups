//return the total number of smiling faces in the array
function countSmileys(arr) {
  let returnArray = [];
  let smiley = false;
  for (let i=0; i<arr.length; i++) {
    console.log("Array[i] is: ", arr[i]);
    if (arr[i] === ":)") {
      smiley = true;
      } else if (arr[i] === ":D") {
        smiley = true;
        } else if (arr[i] === ":~)") {
          smiley = true;
          } else if (arr[i] === ";~D") {
            smiley = true;
            } else if (arr[i] === ":~D") {
              smiley = true;
              } else if (arr[i] === ";-D") {
                smiley = true;
                } else if (arr[i] === ":-D") {
                  smiley = true;
                  } else if (arr[i] === ":-)") {
                    smiley = true;
                    } else if (arr[i] === ";D") {
                      smiley = true;
                      } else if (arr[i] === ";~)") {
                        smiley = true;
                        } else if (arr[i] === ";)") {
                          smiley = true;
                          } else if (arr[i] === ";-)") {
                            smiley = true;
                          
                        
                    

              } else {
                smiley = false;
              }
    if (smiley) {
      console.log("Pushing ", arr[i], " to new array.");
      returnArray.push(arr[i]);
      smiley = false;
    };
  };
  console.log("Return Array is ", returnArray);
  return returnArray.length;
}
