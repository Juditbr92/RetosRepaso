// RETO 1
// Realizar una función que dada una fecha de nacimiento (día y mes) te devuelva el signo zodiacal. La cabecera de la función tendrá el aspecto: function zodiac(day, month)
function zodiac(day, month) {
    var result = "";
    if ((day >= 21 && month === "Marzo") || (day <= 19 && month === "Abril")) {
        result = "Tu horóscopo es Aries";
    }
    else if ((day >= 20 && month === "Abril") || (day <= 20 && month === "Mayo")) {
        result = "Tu horóscopo es Tauro";
    }
    else if ((day >= 21 && month === "Mayo") || (day <= 20 && month === "Junio")) {
        result = "Tu horóscopo es Géminis";
    }
    else if ((day >= 21 && month === "Junio") || (day <= 22 && month === "Julio")) {
        result = "Tu horóscopo es Cáncer";
    }
    else if ((day >= 23 && month === "Julio") || (day <= 22 && month === "Agosto")) {
        result = "Tu horóscopo es Leo";
    }
    else if ((day >= 23 && month === "Agosto") || (day <= 22 && month === "Septiembre")) {
        result = "Tu horóscopo es Virgo";
    }
    else if ((day >= 23 && month === "Septiembre") || (day <= 22 && month === "Octubre")) {
        result = "Tu horóscopo es Libra";
    }
    else if ((day >= 23 && month === "Octubre") || (day <= 21 && month === "Noviembre")) {
        result = "Tu horóscopo es Escorpio";
    }
    else if ((day >= 22 && month === "Noviembre") || (day <= 21 && month === "Diciembre")) {
        result = "Tu horóscopo es Sagitario";
    }
    else if ((day >= 22 && month === "Diciembre") || (day <= 20 && month === "Enero")) {
        result = "Tu horóscopo es Capricornio";
    }
    else if ((day >= 21 && month === "Enero") || (day <= 19 && month === "Febrero")) {
        result = "Tu horóscopo es Acuario";
    }
    else {
        result = "Tu horóscopo es Piscis";
    }
    return result;
}
console.log(zodiac(23, "Marzo"));
console.log(zodiac(18, "Mayo"));
console.log(zodiac(21, "Mayo"));
