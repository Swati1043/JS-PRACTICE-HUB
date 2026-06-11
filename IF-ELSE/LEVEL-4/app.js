// 1. Take a character and check if it is a letter, a digit, or neither.
// ------------------------------------------------------------------------

// let ch = "5";

// if((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") ){
//     console.log(`ch is letter : ${ch}`)
// }
// else if(ch >= "0" && ch <= "9"){
//     console.log(`ch is digit : ${ch}`)
// }
// else{
//    console.log("neither");
// }

// -------------------------------------------------------------

// 2. Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and “FizzBuzz” if divisible by both.
// ----------------------------------------------------------------------------------------------------------------------

// let num = 10;

// if(num % 3 == 0 && num % 5 == 0){
//     console.log(`number : ${num} is divisible by both - FizzBuzz`)
// }
// else if(num % 3 == 0){
//     console.log(`number : ${num} is divisible by 3 - Fizz`)
// }
// else if(num % 5 == 0){
//     console.log(`number : ${num} is divisible by 5 - Buzz`)
// }
// else{
//     console.log(`Wrong input : ${num}`)
// }

// ---------------------------------------------------------------------------------

// 3. Take three numbers and print the median value (neither maximum nor minimum).
// ----------------------------------------------------------------------------------

// let n1 = 10;
// let n2 = 40;
// let n3 = 30;


// if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)){
//     console.log(`n1 is median : ${n1}`)
// }
// else if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)){
//     console.log(`n2 is median : ${n2}`)
// }
// else{
//     console.log(`n3 is median : ${n3}`)
// }

// ------------------------------------------------------------------------------------

// 4. Take 24-hour time (hours and minutes) and print whether it is AM or PM.
// ----------------------------------------------------------------------------

// let hour = 12;
// let minutes = 59;

// if(hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59){
//     if(hour < 12){
//         console.log("AM");
//     }
//     else{
//         console.log("PM")
//     }
// }
// else{
//     console.log("Invalid time")
// }

// -------------------------------------------------------------------------------

// 5. Take income and age, and check if eligible for tax (age > 18 and income > 5 L).
// ------------------------------------------------------------------------------------

// let income = 500000;
// let age = 23;

// if(age > 18 && income > 500000){
//     console.log(`ELigible for tax : income : ${income} and age : ${age}`)
// }
// else{
//     console.log("not eligible")
// }

// -------------------------------------------------------------------------------------

// // 6. Take two numbers and check if both are positive and their sum is less than 100.
// // -----------------------------------------------------------------------------------

// let n1 = 10;
// let n2 = 200;
// let sum = n1 + n2;

// if((n1 > 0 && n2 > 0) && sum < 100){
//     console.log("Yes sum is less than 100")
// }
// else{
//     console.log("No sum is not less than 100")
// }

// ---------------------------------------------------
// 7. Take a single digit (0–9) and print its word form (“Zero” to “Nine”).
// -------------------------------------------------------------------------

// let digit = 1;

// if(digit == 0){
//     console.log(`Digit is Zero : ${digit}`)
// }
// else if(digit == 1){
//     console.log(`Digit is One : ${digit}`)
// }
// else if(digit == 2){
//     console.log(`Digit is Two : ${digit}`)
// }
// else if(digit == 3){
//     console.log(`Digit is Three : ${digit}`)
// }
// else if(digit == 4){
//     console.log(`Digit is Four : ${digit}`)
// }
// else if(digit == 5){
//     console.log(`Digit is Five : ${digit}`)
// }
// else if(digit == 6){
//     console.log(`Digit is Six : ${digit}`)
// }
// else if(digit == 7){
//     console.log(`Digit is Seven : ${digit}`)
// }
// else if(digit == 8){
//     console.log(`Digit is Eight : ${digit}`)
// }
// else if(digit == 9){
//     console.log(`Digit is Nine : ${digit}`)
// }
// else{
//     console.log(`Wrong input : ${digit}`)
// }

// ------------------------------------------------------------------------------

// 8. Take a weekday number (1–7) and determine if it is a weekday or weekend.
// ----------------------------------------------------------------------------

// let day = 4;

// if(day >= 1 && day <= 5){
//     console.log(`Weekday : ${day}`)
// }
// else if(day == 6 || day == 7){
//     console.log(`Weekend : ${day}`)
// }
// else{
//     console.log(`Wrong input : ${day}`)
// }

// -----------------------------------------------------------------------------

// 9. Take electricity units consumed and calculate the bill as per slabs (using if-else).
// ----------------------------------------------------------------------------------------

// ******** Assuming:
// ******** 0-100 units  -> ₹5/unit
// ******** 101-200 units -> ₹7/unit
// ******** Above 200 -> ₹10/unit

// let units = 120;
// let bill;

// if(units <= 100){
//     bill = units * 5;
// }
// else if(units <= 200){
//     bill = units * 7;
// }
// else{
//     bill = units * 10;
// }
// console.log(`Bill = ₹${bill}`)

// ----------------------------------------------------------------------------------------

// 10. Take a password string and check basic rules (length ≥ 8 and contains at least one digit).
// -----------------------------------------------------------------------------------------------

// let pass = "qwertyui123";

// if(pass.length >= 8){
//     if(pass.includes("0") || pass.includes("1") || pass.includes("2") || pass.includes("3") || pass.includes("4") || pass.includes("5") || pass.includes("6") || pass.includes("7") || pass.includes("8") || pass.includes("9")){
//         console.log(`Valid Password: ${pass}`);
//     }
//     else{
//         console.log(`Password must contain a digit: ${pass}`);
//     }

// }
// else{
//     console.log(`Password length must be at least 8: ${pass}`);
// }

