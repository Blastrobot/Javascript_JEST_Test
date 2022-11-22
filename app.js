// // app.js file content
// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)

// let fromEuroToDollar = (EUR, USD) => {
//     return EUR * 1.2
// };

// console.log(fromEuroToDollar(3.5));

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
let fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueinYen = (valueInDollar * 0.8) * 127.9;
    // return the Yen value
    return valueinYen;
}

// we declare the function with the exact name "fromDollarToYen"
let fromYenToPound = function(valueInYen){
    // convert the given valueInDollar to Yen
    let valueinPound = (valueInYen / 127.9) * 0.8;
    // return the Yen value
    return valueinPound;
}

console.log(fromEuroToDollar(3.5), fromDollarToYen(3), fromYenToPound(250));
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }