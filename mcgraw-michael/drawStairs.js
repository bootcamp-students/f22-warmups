function drawStairs(n) {
    // your code here
    let step = "I";
    let space = " ";
    for (let i = 1; i <= n; i++) {
        if (n === 1 ) {
            return step;
        } else if (i === n && n > 1) {
            return step;
        } 
        step += "\n" + space + "I";
        space += " ";
    }
}
