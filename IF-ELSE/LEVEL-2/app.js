// 1. Take three sides and check if they form a valid triangle.
// -------------------------------------------------------------

// let a = 5;
// let b = 5;
// let c = 5;

// if((a + b > c) && (b + c > a) && (c + a > b)){
//     console.log("This is valid triangle")
// }
// else{
//     console.log("This is not a valid triangle"); 
// }

// ----------------------------------------------------------

// 2. If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.
// ----------------------------------------------------------------------------------------------------

// let a = 6;
// let b = 6;
// let c = 6;

// if(a + b > c && b + c > a && c + a > b){
//     console.log("valid triangle")
//     if(a == b && b == c && c == a){
//         console.log("equilateral"); 
//     }
//     else if(a == b || b == c || c == a){
//         console.log("isosceles");
//     }
//     else if(a != b && b != c && c != a){
//         console.log("scalene");
//     }
// }
// else{
//     console.log("not valid")
// }

// -----------------------------------------------------------------------

// 3. Take marks (0–100) and print the corresponding grade (A/B/C/D/F).
// ----------------------------------------------------------------------

// let marks = 90;

// ***edge case***

// if(marks < 0 || marks > 100){
//     console.log(`Invalid marks: ${marks}`)
// }

// else if(marks >= 90 ){
//     console.log(`marks is : ${marks} , and grade is A`)
// }
// else if(marks >= 80){
//     console.log(`marks is : ${marks} , and grade is B`)
// }
// else if(marks >= 70){
//     console.log(`marks is : ${marks} , and grade is C`)
// }
// else if(marks >= 60){
//     console.log(`marks is : ${marks} , and grade is D`)
// }
// else if(marks >= 50){
//     console.log(`marks is : ${marks} , and grade is E`)
// }
// else{
//     console.log(`marks is : ${marks} , and grade is F`)
// }

// -----------------------------------------------------------------

// 4. Check if one of two given numbers is a multiple of the other.
// -------------------------------------------------------------------

// let a = 5;
// let b = 20;

// if(a % b == 0 || b % a == 0){
//     console.log("one of two given number is a multiple of the other")
// }
// else{
//     console.log("not multiple ")
// }

// ----------------------------------------------------------------------------

// 5. Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”
// ----------------------------------------------------------------------------------------------------------------

// let hour = 5;

// // ***edge case***

// if(hour < 1 || hour > 24){
//     console.log("Invalid hour")
// }

// else if(hour >= 5 && hour < 12){
//     console.log(`Good morning at ${hour}`); 
// }
// else if(hour >= 12 && hour < 17){
//     console.log(`Good afternoon at ${hour}`); 
// }
// else if(hour >= 17 && hour < 21){
//     console.log(`Good evening at ${hour}`); 
// }
// else{
//     console.log(`Good night at ${hour}`); 
// }

// --------------------------------------------------------

// 6. Check voting eligibility for a given age (18+).
// ----------------------------------------------------

// let age = 23;

// // ***edge case***

// if(age < 0){
//     console.log(`Invalid age : ${age}`)
// }

// else if(age >= 18){
//     console.log(`Person's Age : ${age} and eligible for vote`)
// }
// else{
//     console.log(`Person's Age : ${age} and not eligible for vote`)
// }

// ------------------------------------------------------------------------

// 7. Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.
// -------------------------------------------------------------------------------------------------------

// let n1 = 10;
// let n2 = 20;

// if(n1 % 2 == 0 && n2 % 2 == 0){
//     console.log(`n1: ${n1} and n2: ${n2} both are even`)
// }
// else if(n1 % 2 != 0 && n2 % 2 != 0){
//     console.log(`n1: ${n1} and n2: ${n2} both are odd`)
// }
// else{
//     console.log(`n1: ${n1} and n2: ${n2}, one is even and one is odd`)
// }

// ---------------------------------------------------------------------------

// 8. Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’
// ---------------------------------------------------------------------------------------

// let ch = "s";

// if(ch >= "a" && ch <= "m"){
//     console.log(`ch: ${ch} lies between a and m `)
// }
// else if(ch >= "n" && ch <= "z"){
//     console.log(`ch: ${ch} lies between n and z `)
// }
// else{
//     console.log(`ch: ${ch} , Invalid alphabet`)
// }

// ----------------------------------------------------------

// 9. Take a day number (1–7) and print the corresponding day name.
// ------------------------------------------------------------------

// let day = 1;

// if(day == 1){
//     console.log(`Day is: ${day}, Monday`)
// }
// else if(day == 2){
//     console.log(`Day is: ${day}, Tuesday`)
// }
// else if(day == 3){
//     console.log(`Day is: ${day}, Wednesday`)
// }
// else if(day == 4){
//     console.log(`Day is: ${day}, Thursday`)
// }
// else if(day == 5){
//     console.log(`Day is: ${day}, Friday`)
// }
// else if(day == 6){
//     console.log(`Day is: ${day}, Saturday`)
// }
// else if(day == 7){
//     console.log(`Day is: ${day}, Sunday`)
// }
// else{
//     console.log(`Day is: ${day}, Invalid Day `)
// }

// ----------------------------------------------------

// 10. Take a month number (1–12) and print the number of days in that month (ignore leap years).
// -----------------------------------------------------------------------------------------------

// let m = 2;

// if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
//     console.log(`31 days in a given month number : ${m}`)
// }
// else if(m == 4 || m == 6 || m == 9 || m == 11){
//     console.log(`30 days in a given month number : ${m}`)
// }
// else if(m == 2){
//     console.log(`28 days in a given month number : ${m}`)
// }
// else{
//     console.log(`Invalid Month Number`)
// }