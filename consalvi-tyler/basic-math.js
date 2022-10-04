


function calculate(str) {
    str = str.split('plus');
    str = str.join('+');
    str = str.split('minus');
    str = str.join('-');
    return eval(str.toString())+'';
}