function coinCombo (cents) {
	//define cent variables
  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;
  let orgCent = cents;
  //quarter = cents / 25 rounded down
  quarters = Math.floor(cents/25);
  //redefine cents with each pass through denomination
  //Deduct the denomination * value from the original cents
  cents = cents - (quarters*25);
  console.log(`Of ${orgCent} cents I have ${quarters} quarters`);
  //quarter = cents / 10 rounded down
  //Deduct the denomination * value from the original cents
  dimes = Math.floor(cents/10);
  cents = cents - (dimes*10);
  console.log(`Of ${orgCent} cents I have ${dimes} dimes`);
  //quarter = cents / 5 rounded down
  //Deduct the denomination * value from the original cents
  nickels = Math.floor(cents/5);
  cents = cents - (nickels*5);
  console.log(`Of ${orgCent} cents I have ${nickels} nickels`);
  //quarter = cents / 1 rounded down
  //Deduct the denomination * value from the original cents
  pennies = Math.floor(cents/1);
  cents = cents - (pennies*1);
  console.log(`Of ${orgCent} cents I have ${pennies} pennies`);

  return [pennies, nickels, dimes, quarters];
}
