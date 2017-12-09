// Insert X in Y (switch the value of index Y with the given value of X)
var array = [-10, 1, 2, 3, -5, 7, 3, 4, -3, 5, 8, -6, 9, 10, -9, 5, 30];
function switchValue(val, index) {
    array[index] = val;
    return array;
}
console.log(switchValue(7, 1));