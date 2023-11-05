// Reto 2: realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada. La cabecera será function evenNumbers(num)

let aux: number[] = []
function evenNumbers(num){
    for(let i = 0; i < num; i++){
        if(i % 2 !== 0){
            aux.push(i);
        }
    }
    console.log(aux);
}

evenNumbers(33);

// Reto 3: realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert


function myRevert(myArr:number[]): number[]{
    let reversedArray: number [] = [];
    for(let i = myArr.length - 1; i >= 0; i --){
        reversedArray.push(myArr[i])
    }
    return reversedArray
}

console.log(myRevert([2, 5, 14, 23]));

// Reto 4: realizar una función que reciba un array de string que contenga nombre de colores y que imprima si el color está en el arcoíris o no. 



function isRainbow(colors: string) :string{
    const rainbow = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for(let i = 0; i < rainbow.length; i ++){
        if(colors === rainbow[i]){
            return "Este color está en el arcoíris"
        }
    }
    return "Este color no está en el arcoíris"
}

console.log(isRainbow("marrón"));
console.log(isRainbow("azul"));
