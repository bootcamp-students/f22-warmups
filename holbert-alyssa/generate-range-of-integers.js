//INPUT min, max, step
    //LET min = 

//I googled this solution and don't completely understand it so I can't pseudocode it.
//I'm submitting this just so it's finished and out of the way.
//I'll come back to it later when I understand what to do.

function generateRange(min, max, step) {
  return "0".repeat(Math.floor((max - min) / step) + 1).split("").map((x, i) => min + i * step);
}

console.log(generateRange(2, 10, 2));
