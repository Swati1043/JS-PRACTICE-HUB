// 1. Take a 3-digit number and check if the sum of the first and last digit equals the middle digit
// ---------------------------------------------------------------------------------------------------

// let num = 123;
// let lastDigit = num % 10;
// num = Math.floor(num / 10);
// let middleDigit = num % 10;
// num = Math.floor(num / 10);
// let firstDigit = num % 10;
// num = Math.floor(num / 10);
// let sum = lastDigit + firstDigit;

// if(sum == middleDigit){
//     console.log(`Yes, sum is : ${sum} and middleDigit : ${middleDigit}`)
// }
// else{
//     console.log(`No, sum is : ${sum} and middleDigit : ${middleDigit}`)
// }

// -----------------------------------------------------------------------------------

// 2. Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits
// ---------------------------------------------------------------------------------------------------------

// let int = 1;

// if(int >= 1000 && int <= 9999){
//     console.log(`Integer is in the range of 1000 to 9999`);

//     let lastDigit = int % 10;
//     int = Math.floor(int / 10);

//     let lastSecDigit = int % 10;
//     int = Math.floor(int / 10);

//     let last3rdDigit = int % 10;
//     int = Math.floor(int / 10);

//     let firstDigit = int % 10;
//     int = Math.floor(int / 10);

//     let sum = lastDigit + lastSecDigit + last3rdDigit + firstDigit;
//     let prod = lastDigit * lastSecDigit * last3rdDigit * firstDigit;

//     if(sum > prod){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }

// else if(int >= 100 && int <= 999){
//     console.log(`Integer is in the range of 100 to 999`);

//     let lastDigit = int % 10;
//     int = Math.floor(int / 10);

//     let lastSecDigit = int % 10;
//     int = Math.floor(int / 10);

//     let firstDigit = int % 10;
//     int = Math.floor(int / 10);

//     let sum = lastDigit + lastSecDigit + firstDigit;
//     let prod = lastDigit * lastSecDigit * firstDigit;

//     if(sum > prod){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }

// else if(int >= 10 && int <= 99){
//     console.log(`Integer is in the range of 10 to 99`);

//     let lastDigit = int % 10;
//     int = Math.floor(int / 10);

//     let firstDigit = int % 10;
//     int = Math.floor(int / 10);

//     let sum = lastDigit + firstDigit;
//     let prod = lastDigit * firstDigit;

//     if(sum > prod){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }

// else if(int >= 1 && int <= 9){
//     let sum = int;
//     let prod = int;

//     if(sum > prod){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }

// else{
//     console.log("Invalid Input")
// }

// ---------------------------------------------------------------------

// 3. Take two dates (day and month) and determine which one comes first in the calendar
// --------------------------------------------------------------------------------------

// let day1 = 10;
// let month1 = 3;

// let day2 = 4;
// let month2 = 3;

// if(month1 < month2){
//     console.log(`date 1 comes first : ${day1}/${month1}`)
// }
// else if(month1 > month2){
//     console.log(`date 2 comes first : ${day2}/${month2}`)
// }
// else{
//     // same month
//     if(day1 < day2){
//         console.log(`date 1 comes first : ${day1}/${month1}`)
//     }
//     else if(day1 > day2){
//         console.log(`date 2 comes first : ${day2}/${month2}`)
//     }
//     else{
//         console.log(`Both dates are same`)
//     }
// }

// --------------------------------------------------------------------

// 4. Take day and month and check if it forms a valid calendar date (ignoring leap years)
// ----------------------------------------------------------------------------------------

// let day = 31;
// let month = 4;

// if(month < 1 || month > 12){
//     console.log(`Invalid month : ${month}`)
// }
// else{
//     // valid month
//     if(month == 2){
//         console.log(`valid month : ${month} and in this month 28 days are present`)

//         if(day >=1 && day <= 28){
//             console.log(`valid date in calendar : ${day}/${month}`)
//         }
//         else{
//             console.log(`not valid date in calendar : ${day}/${month}`)
//         }
//     }
//     else if(month == 4 || month == 6 || month == 9 || month == 11){
//         console.log(`valid month : ${month} and in this month 30 days are present`)

//         if(day >= 1 && day <= 30){
//             console.log(`valid date in calendar : ${day}/${month}`)
//         }
//         else{
//             console.log(`not valid date in calendar : ${day}/${month}`)
//         }
//     }
//     else{
//         console.log(`valid month : ${month} and in this month 31 days are present`)

//         if(day >= 1 && day <= 31){
//             console.log(`valid date in calendar : ${day}/${month}`)
//         }
//         else{
//             console.log(`not valid date in calendar : ${day}/${month}`)
//         }
//     }
  
// }

// -----------------------------------------------------------------------------------------------

// 5. Take a year and print the corresponding century (e.g., “19th century”, “20th century”)
// ------------------------------------------------------------------------------------------------

// let year = 1901;
// let century = Math.floor((year-1) / 100) + 1;
// console.log(`Year ${year} belongs to the ${century}th century`);

// -----------------------------------------------------------------

