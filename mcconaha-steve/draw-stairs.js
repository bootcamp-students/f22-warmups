function drawStairs(n) {
  // starting at i = 0, 
  // i needs to enter on a separate line and tab over n times
  let draw ="";
    for (let i = 1; i < n; i++) {
      draw += ("I\n")+(" ").repeat(i);
      };
    //looping through the aray each time adds I/n plus (one space times i)  
    return `${draw}I`;
    //when i = the draw variable will be an emptry string
};
  
