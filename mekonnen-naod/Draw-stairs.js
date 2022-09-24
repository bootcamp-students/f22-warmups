

function drawStairs(n) {
  if (n > 1){ 
    let str = ''
    for (let i = 1; i <n; i++){
      str +=`I\n${' '.repeat(i)}`
    }
    return str + 'I';
  } else {
    return 'I';
  }
}
