// Reto 2: realizar una función que devuelva si existe un numero par en el array de núm introducidos por entrada. 

let arr = [1, 25, 33, 10, 11]
function hasEven(myNums) :string{
    let i = 0
    while (i < myNums.length){
        if(myNums[i] % 2 == 0){
            return "Hay número par"
        } 
        i++;
    }
    return "No hay número par"
}

console.log(hasEven(arr));