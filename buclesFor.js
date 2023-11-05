// Reto 2: realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada. La cabecera será function evenNumbers(num)
var aux = [];
function evenNumbers(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            aux.push(i);
        }
    }
    console.log(aux);
}
evenNumbers(33);
// Reto 3: realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert
function myRevert(myArr) {
    var reversedArray = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        reversedArray.push(myArr[i]);
    }
    return reversedArray;
}
console.log(myRevert([2, 5, 14, 23]));
