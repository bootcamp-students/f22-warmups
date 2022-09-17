function abbrevName(name){
    let newName = name[0].toUpperCase() + '.';
    let second = name.split(' ');
    let secName = second[1];
    return newName+secName[0].toUpperCase();
}
