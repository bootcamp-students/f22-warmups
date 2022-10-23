


function toCamelCase(str){
    var arr = str.split(/[-_]/);
    var result = arr[0];
    for(var i = 1; i < arr.length; i++){
        result += arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return result;
}
