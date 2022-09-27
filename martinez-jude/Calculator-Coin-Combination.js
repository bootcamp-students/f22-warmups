function coinCombo (cents) {
	let coin = [1,5,10,25];
  for (let i = 3; i >= 0; i--){
    let holdCent = Math.floor(cents / coin[i]);
    if (cents >= coin[i]){
      cents = cents - (holdCent * coin[i]);
      coin[i] = holdCent;
    } else 
      coin[i] = 0;
 }
  console.log(coin)
  return coin;
}

// func coinCombo perm (cents)
// var array coin index of 4, holds all coin values least to greatest

// for loop conditions
// let i = 3
// if i is equal to or greater then 0 loop
// i = i - 1 

// set var holdCent = Math.floor(cents / coin[i]
// Math.floor round down after cents is divided by array coin index value i


// IF cents greater then > or equal to coin array index value i
// set var cents to equal = cents - (holdcent * coin[i])
// set array coin[i] to the value of holdCent

// Else 
//set array coin[i] to equal 0

//return coin array
