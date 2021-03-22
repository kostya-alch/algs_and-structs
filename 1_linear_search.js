const array = [1, 4 , 5, 6, 8, 3, 5, 9, 2, 5, 2]

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
if (array[i] === item) {
 return i;
}
    }
    return null;
}
console.log(linearSearch(array, 9));