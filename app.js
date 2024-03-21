// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(unEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = unEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(1) + " USD")

const fromDollarToYen = function(unDollar) {
    let valorDolarEnYenes = oneEuroIs["JPY"] / fromEuroToDollar(1); //1 dolar equivale a 146.26168224299064 yenes
    // convierto el valor en yenes
    let valorEnYen = unDollar * valorDolarEnYenes;
    //retorno el valor en yenes 
    return valorEnYen;
}
console.log(fromDollarToYen(1) + " JPY");

const fromYenToPound = function(unYen) {
    let valorYenEnPounds = oneEuroIs["GBP"] / fromDollarToYen(1); //1 yen equivale a 0.005948242811501598 pounds
    // convierto el valor en pounds
    let valorEnPounds = unYen * valorYenEnPounds;
    //retorno el valor en pounds 
    return valorEnPounds;
}
console.log(fromYenToPound(1) + " GBP");


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}