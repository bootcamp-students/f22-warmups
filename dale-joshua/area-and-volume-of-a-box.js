function getSize(width, height, depth) {

    // Formula for finding the surface area
    let area = 2 * ((width * height) + (depth * height) + (width * depth));
    // Formula for fonding volume
    let volume = (width * height * depth);

    return [area, volume]

};
