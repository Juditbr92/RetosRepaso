// Reto 2: realizar una función que devuelva si existe un numero par en el array de núm introducidos por entrada. 

let arr = [1, 25, 33, 10, 11]
function hasEven(myNums) :string{
    let i = 0;
    while (i < myNums.length){
        if(myNums[i] % 2 == 0){
            return "Hay número par"
        } 
        i++;
    }
    return "No hay número par"
}

console.log(hasEven(arr));

// Reto 3: Realizar una función que reciba un array de nombres y te devuelva verdadero sí y solo si todos los nombres empiezan por M

function startWithM(myNames: string[]): boolean{
    let i  = 0;
    while (i < myNames.length) {
        if(!myNames[i].startsWith("M")){
            return false
        }
        i ++;
    }
    return true 
}

let nombres = ["Maria", "Marta", "Mercedes", "Laura"]
let nombres2 = ["Maria", "Marta", "Mercedes", "Monica"]

console.log(startWithM(nombres))
console.log(startWithM(nombres2))
