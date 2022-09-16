function getSize(l, w, h){
    // returns area and volume of getSize
  
  
    //area=2(wl+hl+hw)
    let area = 2*((l*w)+(h*l)+(h*w))

    // vol = length * width * height
    let vol = l*w*h 

    return [area, vol]
}