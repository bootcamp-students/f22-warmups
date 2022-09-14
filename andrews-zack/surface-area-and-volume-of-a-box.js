function getSize(width, height, depth) {
    // Surface area = 2wh + 2wd + 2hd
    let boxSurfaceArea = ((width * height)*2) + ((width * depth)*2) + ((height * depth)*2);
    // Volume = w * h * d
    let boxVolume = (width * height * depth);
    return [boxSurfaceArea, boxVolume];
};