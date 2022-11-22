// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum (14,9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 Yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const Yens = fromDollarToYen(3)

    // if 1 dollar are 106.58 yens, then 3 dollars should be (3 * 106.5)
    const expected = 3 * 106.5; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBeCloseTo(306.96); //1 dollar are 102.32 yens, then 3 euros should be = (3 * 102.32)
})

test("One Yen should be 0.00625 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const Yens = fromYenToPound(250)

    // if 1 Yen are 0.00625, then 150 Yens should be (250 * 0.00625)
    const expected = 250 * 0.00625; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(250)).toBeCloseTo(1.56); //1 dollar are 102.32 yens, then 3 euros should be = (3 * 102.32)
})