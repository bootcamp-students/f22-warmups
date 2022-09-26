/*
for each incremental value of n, add a ' ' before I starting at 0
print a new I line for each incremental value
FOR loop to get incremental values of n
i * ' 'I
*/

function drawStairs(n) {
    let stairSpace = '';
    let start = '';
    let stairs = new Array();
    for (let i = 0; i < n; i++) {
        start += stairSpace;
        if (n > 1) {
          stairSpace = ' '
       } stairs.push(`${start}I`)
    } return (stairs.join('\n'));
}