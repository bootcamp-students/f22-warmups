// Pseudocode
// Roger Mullins, Team DaVinci
//
// Function Needs to Perform Two Calculations:
//    > Area
//    > Volume
//
// AREA
//
// (Assumption: box has three pairs of congruent sides)
//
// 1. BEGIN
// 2. USE formula area = ((w * h * 2) + (h * d * 2) + (w * d * 2))
// 3. RETURN result
// 4. END
//
// VOLUME
// 1. BEGIN
// 2. USE formula vol = width * height * depth
// 3. RETURN result
// 4. END

function getSize(width, height, depth) {
    let area = 0;
    let volume = 0;
    
    area = ((width * height * 2) + (height * depth * 2) + (width * depth * 2));
    
    volume = width * height * depth;
  
    return [area, volume];
  }