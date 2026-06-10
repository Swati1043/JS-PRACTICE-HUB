// 1. Take a 3-digit number and check if all digits are distinct.
// ---------------------------------------------------------------

// let num = 112;

// let lastDigit = num % 10;
// num = Math.floor(num / 10);
// let secLastDigit = num % 10;
// num = Math.floor(num / 10);
// let firstDigit = num % 10;
// num = Math.floor(num / 10);

// if(lastDigit !== secLastDigit && secLastDigit !== firstDigit && firstDigit !== lastDigit){
//     console.log(`All digits are distinct`)
// }
// else{
//     console.log(`same digits`)
// }

// -----------------------------------------------------------

// 2. Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.
// --------------------------------------------------------------------------------------------------

// let num = 121;

// let lastDigit = num % 10;
// num = Math.floor(num / 10);

// let middleDigit = num % 10;
// num = Math.floor(num / 10);

// let firstLastDigit = num % 10;
// num = Math.floor(num / 10);

// if(lastDigit > middleDigit && firstLastDigit > middleDigit){
//     console.log("Middle digit is the smaller")
// }
// else if(lastDigit < middleDigit && firstLastDigit < middleDigit){
//     console.log("Middle digit is the largest")
// }
// else{
//     console.log("Middle digit is the neither")
// }

// ------------------------------------------------------------------------

// 3. Take a 4-digit number and check if the first and last digits are equal.
// -----------------------------------------------------------------------------

// let num = 1234;

// let lastDigit = num % 10;
// num = Math.floor(num / 10);

// let secLastDigit = num % 10;
// num = Math.floor(num / 10);

// let thirdLastDigit = num % 10;
// num = Math.floor(num / 10);

// let firstDigit = num % 10;
// num = Math.floor(num / 10);

// if(lastDigit == firstDigit){
//     console.log(`first digit : ${firstDigit} and last digit : ${lastDigit} are equal`)
// }
// else{
//     console.log(`first digit : ${firstDigit} and last digit : ${lastDigit} are not equal`)
// }


// **********2nd way to solve this***********

// let num = 1234;

// let lastDigit = num % 10;
// let firstDigit = Math.floor(num / 1000);

// if(lastDigit == firstDigit){
//     console.log(`Equal`)
// }
// else{
//     console.log(`Not Equal`)
// }

// -------------------------------------------------------------------------------

// 4. Check whether a given integer is single-digit, double-digit, or multi-digit.
// -----------------------------------------------------------------------------------

// let num = 1234;

// if(num >= -9 && num <= 9){
//     console.log(`number is in single digit : ${num}`)
// }
// else if((num >= -99 && num <= -10) || (num >= 10 && num <= 99)){
//     console.log(`number is in double digit : ${num}`)
// }
// else{
//     console.log(`number is in multi digit : ${num}`)
// }

// ------------------------------------------------------------------

// 5. Check if a number is a multiple of 7 or ends with 7.
// --------------------------------------------------------

// let num = 123;
// let lastDigit =  num % 10;

// if(num % 7 == 0){
//     console.log(`number is a multiple of 7 : ${num}`)
// }
// else if(lastDigit == 7){
//     console.log(`number ends with 7 : ${num}`)
// }
// else{
//     console.log(`wrong input number`)
// }

// ***********Best approach***********

// let num = 123;
// let lastDigit =  num % 10;

// if(num % 7 == 0 || lastDigit == 7){
//     console.log(`number is a multiple of 7 or ends with 7 : ${num}`)
// }
// else{
//     console.log(`wrong input number`)
// }

// --------------------------------------------------------------------------

// 6. Take coordinates (x, y) and determine which quadrant the point lies in.
// ---------------------------------------------------------------------------

// let x = 3;
// let y = -4;

// if(x > 0 && y > 0){
//     console.log(`x: ${x} and y: ${y} lies in 1st quadrant`);
// }
// else if(x < 0 && y > 0){
//     console.log(`x: ${x} and y: ${y} lies in 2nd quadrant`);
// }
// else if(x < 0 && y < 0){
//     console.log(`x: ${x} and y: ${y} lies in 3rd quadrant`);
// }
// else if(x > 0 && y < 0){
//     console.log(`x: ${x} and y: ${y} lies in 4rth quadrant`);
// }
// else if(x == 0 && y == 0){
//     console.log("Origin");
// }
// else if(x == 0){
//     console.log("Y-axis");
// }
// else{
//     console.log("X-axis");
// }

// ------------------------------------------------------------------------------------

// 7. Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.
// ------------------------------------------------------------------------------------

// let amount = 646;

// if(amount % 100 == 0){
//     console.log(`Amount can be evenly divided into 2000, 500 and 100 : ${amount}`)
// }
// else{
//     console.log(`Amount can't be evenly divided into 2000, 500 and 100 : ${amount}`)
// }

// ************2nd approach of this question************

// let amount = 2600;

// let note2000 = Math.floor(amount / 2000)
// amount = amount % 2000

// let note500 = Math.floor(amount / 500)
// amount = amount % 500

// let note100 = Math.floor(amount / 100)
// amount = amount % 100

// if(amount == 0){
//     console.log(`Amount can be evenly divided into 2000, 500 and 100 : ${amount}`)
// }
// else{
//     console.log(`Amount can't be evenly divided into 2000, 500 and 100 : ${amount}`)
// }

// --------------------------------------------------------------------------------------

// 8. Check if a number lies within the range [100, 999].
// ----------------------------------------------------------

// let num = 123;

// if(num >= 100 && num <= 999){
//     console.log(`Number lies within the range: ${num}`)
// }
// else{
//     console.log(`Number not lies within the range: ${num}`)
// }

// ----------------------------------------------------------------

// 9. Take two angles of a triangle and compute the third angle.
// ----------------------------------------------------------------

// let a1 = 60;
// let a2 = 50;

// let a3 = 180 - (a1 + a2)
// console.log(a3);

// ------------------------------------------------------------------

// 10. Check whether a number is a perfect square (without using the square root function).
// --------------------------------------------------------------------------------------------

// let num = 25;

// if(num > 0){
    
//     if(num == 1 || num == 4 || num == 9 || num == 16 || num == 25 || num == 36 || num == 49 || num == 64 || num == 81 || num == 100){
//         console.log(`Perfect square number : ${num}`)
//     }
//     else{
//         console.log(`Not Perfect square number : ${num}`)
//     }
// }
// else{
//         console.log(`Not Perfect square number : ${num}`)
// }