// RETO 1 y 2
// Realizar una función que dada una fecha de nacimiento (día y mes) te devuelva el signo zodiacal. La cabecera de la función tendrá el aspecto: function zodiac(day, month)

function zodiac(day: number, month: string): string{
    let result = "";
    if((day >= 21 && month === "Marzo" )|| (day <= 19 && month === "Abril")){
        result = "Tu horóscopo es Aries";
    } else if ((day >= 20 && month === "Abril") || (day <= 20 && month === "Mayo")){
        result = "Tu horóscopo es Tauro";
    } else if ((day >= 21 && month === "Mayo") || (day <= 20 && month === "Junio")){
        result = "Tu horóscopo es Géminis";
    } else if ((day >= 21 && month === "Junio") || (day <= 22 && month === "Julio")){
        result = "Tu horóscopo es Cáncer";
    } else if ((day >= 23 && month === "Julio") || (day <= 22 && month === "Agosto")){
        result = "Tu horóscopo es Leo";
    } else if ((day >= 23 && month === "Agosto") || (day <= 22 && month === "Septiembre")){
        result = "Tu horóscopo es Virgo";
    } else if ((day >= 23 && month === "Septiembre") || (day <= 22 && month === "Octubre")){
        result = "Tu horóscopo es Libra";
    } else if ((day >= 23 && month === "Octubre") || (day <= 21 && month === "Noviembre")){
        result = "Tu horóscopo es Escorpio";
    } else if ((day >= 22 && month === "Noviembre") || (day <= 21 && month === "Diciembre")){
        result = "Tu horóscopo es Sagitario";
    } else if ((day >= 22 && month === "Diciembre") || (day <= 20 && month === "Enero")){
        result = "Tu horóscopo es Capricornio";
    } else if ((day >= 21 && month === "Enero") || (day <= 19 && month === "Febrero")){
        result = "Tu horóscopo es Acuario";
    } else {
        result = "Tu horóscopo es Piscis";
    }
    return result
}

// console.log(zodiac(23, "Marzo"));
// console.log(zodiac(18, "Mayo"));
// console.log(zodiac(21, "Mayo"));

// Reto 3
// Realizar un procedimiento que dado el nombre de un país te imprima en qué continente estás (max 5 países por continente). La cabecera tendrá que ser function continent(country)

const continents = {
    continentEurope: ["Spain", "France", "Italy", "Germany", "Austria"],
    continentAmerica: ["Mexico", "Chile", "Argentina", "Canada", "Colombia"],
    continentAfrica: ["Morocco", "Kenya", "Tunisia", "Senegal", "Nigeria"],
    continentAsia: ["Thailand", "China", "India", "Japan", "Philippines"],
    continentOceania: ["Australia", "New Zealand", "Fiyi", "Papua New Guinea", "Samoa"],
}

function continent(country: string) : string{
    let result = ""
    if(continents.continentEurope.includes(country)){
        result = "Este país está en Europa";
    } else if(continents.continentAmerica.includes(country)){
        result ="Este país está en América";
    } else if(continents.continentAsia.includes(country)){
        result = "Este país está en Asia";
    } else if(continents.continentAfrica.includes(country)){
        result = "Este país está en África";
    } else if(continents.continentOceania.includes(country)){
        result = "Este país está en Oceania"
    } else{
        return "Este país no lo conozco" 
    }
    return result
}

// console.log(continent("Spain"));
// console.log(continent("Chad"));
// console.log(continent("Australia"));

// RETO 4
// Realizar una función que te imprima por consola el siguiente mensaje: "El numero es par..." La cabecera de la función será function isEven(number)

export function isEven(number:number): string{
    let result = "";
    if(number % 2 == 0){
        result ="El numero es par"
    } else {
        result = "El número es impar"
    }
    return result;
}

// console.log(isEven(20));

