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
