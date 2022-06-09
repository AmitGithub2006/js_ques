/////////////////////////////////////////////////////////////////////////////////////
// Practice problems
// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal

/* Your answer here*/
// let a, b;
// (a = 15), (b = 15);
// if (a == b) {
//   console.log("a and b are equal");
// } else {
//   console.log("a and b are different");
// }

// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
/* Your answer here*/
// let a;
// a = 4443;
// if (a % 2 == 0) {
//   console.log("a is even");
// } else {
//   console.log("a is odd");
// }

// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here*/
// let a, b;
// a = -12;
// if (a < 0) {
//   console.log("a is a negative number");
// } else if (a == 0) {
//   console.log("a is zero");
// } else {
//   console.log("a is a positive number");
// }

// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here*/
// let a;
// a = 3001;
// if (a % 4 == 0 || a % 100 == 0 || a % 400 == 0) {
//   console.log("Leap year");
// } else {
//   console.log("Non leap year");
// }

// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here*/
// let a;
// a = 21;
// if (a >= 18) {
//   console.log("a is eligible for casting");
// } else {
//   console.log("a is not eligible for casting");
// }

// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here*/
// let m, n;
// m = 23;
// if (m > 0) {
//   n = 1;
//   console.log("1");
// } else if (m == 0) {
//   n = 0;
//   console.log("0");
// } else {
//   n = -1;
//   console.log("-1");
// }

// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here*/
// let h;
// h = 150;
// if (h < 50) {
//   console.log("dwarf");
// } else if (h >= 50 && h <= 200) {
//   console.log("medium");
// } else {
//   console.log("tall");
// }

// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here*/
// let a, b, c;
// (a = 6), (b = 5), (c = 8);
// if (a > b && a > c) {
//   console.log("a is greatest");
// } else if (b > a && b > c) {
//   console.log("b is greatest");
// } else {
//   console.log("c is greatest");
// }

// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here*/
// let x, y;
// (x = -3), (y = -8);
// if (x > 0 && y > 0) {
//   console.log("First quadrant");
// } else if (x < 0 && y > 0) {
//   console.log("Second quadrant");
// } else if (x < 0 && y < 0) {
//   console.log("Third quadrant");
// } else if (x == 0 && y == 0) {
//   console.log("Origin");
// } else {
//   console.log("Fourth quadrant");
// }

// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140
// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.
/* Your answer here*/
// let a, b, c;
// (a = 70), (b = 60), (c = 41);
// if ((a >= 65 && b >= 55 && c >= 50 && a + b + c >= 190) || a + b >= 140) {
//   console.log("Student eligible");
// } else {
//   console.log("student not eligible");
// }

// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here*/

// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here*/
// let roll, name, marks1, marks2, marks3;
// (roll = 784),
//   (name = "James"),
//   (marks1 = 50),
//   (marks2 = 60),
//   (marks3 = 40),
//   (percent = ((marks1 + marks2 + marks3) * 100) / 300);
// console.log(roll);
// console.log(name);
// console.log(marks1);
// console.log(marks2);
// console.log(marks3);
// console.log(marks1 + marks2 + marks3);
// console.log(percent);
// if (percent > 60) {
//   console.log("first division");
// } else if (percent <= 60 && percent > 45) {
//   console.log("second division");
// } else {
//   console.log("third division");
// }

// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here*/
// let temp;
// temp = 34;
// if (temp <= 0) {
//   console.log("Freezing weather");
// } else if (temp > 0 && temp <= 10) {
//   console.log("Very Cold weather");
// } else if (temp > 10 && temp <= 20) {
//   console.log("Cold weather");
// } else if (temp > 20 && temp <= 30) {
//   console.log("Normal in temperature");
// } else if (temp > 30 && temp < 40) {
//   console.log("Hot weather");
// } else {
//   console.log("Very hot weather");
// }

// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here*/
// let a, b, c;
// (a = 50), (b = 65), (c = 65);
// if (
//   a + b + c == 180 &&
//   (a + b > c || b + c > a || a + c > b) &&
//   a != 0 &&
//   b != 0 &&
//   c != 0
// ) {
//   console.log("VALID");
//   if (a == b && b == c) {
//     console.log("EQUILALTERAL");
//   } else if (a == b || b == c || c == a) {
//     console.log("ISOSCELES");
//   } else {
//     console.log("SCALENE");
//   }
// } else {
//   console.log("NOT VALID");
// }

// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here*/
// let a, b, c;
// (a = 20), (b = 10), (c = 150);
// if (
//   a + b + c == 180 &&
//   (a + b > c || b + c > a || a + c > b) &&
//   a != 0 &&
//   b != 0 &&
//   c != 0
// ) {
//   console.log("Valid triangle");
// } else {
//   console.log("Invalid triangle");
// }

// 16. Write a program to check whether a character is an alphabet, digit or special character.

// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here*/
// let char;
// char = 95;
// if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
//   console.log("Alphabet");
// } else if (char >= 48 && char <= 57) {
//   console.log("Digit");
// } else if (
//   (char >= 32 && char <= 47) ||
//   (char >= 58 && char <= 64) ||
//   (char >= 91 && char <= 96) ||
//   (char >= 123 && char <= 126)
// ) {
//   console.log("Special character");
// } else {
//   console.log("Invalid character");
// }

// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here*/
// let alphabet;
// alphabet = "h";
// if (
//   (alphabet >= "a" && alphabet <= "z") ||
//   (alphabet >= "A" && alphabet <= "Z")
// ) {
//   if (
//     alphabet == "a" ||
//     alphabet == "e" ||
//     alphabet == "i" ||
//     alphabet == "o" ||
//     alphabet == "u" ||
//     alphabet == "A" ||
//     alphabet == "E" ||
//     alphabet == "I" ||
//     alphabet == "O" ||
//     alphabet == "U"
//   ) {
//     console.log("alphabet is a vowel");
//   } else {
//     console.log("alphabet is a consonant");
//   }
// } else {
//   console.log("char is not alphabet");
// }

// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here*/
// let CP, SP;
// (CP = 500), (SP = 700);
// if (CP < SP) {
//   profit = SP - CP;
//   console.log("profit", profit);
// } else if (SP < CP) {
//   loss = CP - SP;
//   console.log("loss", loss);
// } else {
//   console.log("neutral");
// }

// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :
// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-
// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here*/
// let a = 800;
// if (a <= 199) {
//   amount = a * 1.2;
// } else if (a < 400) {
//   amount = (a - 199) * 1.5 + 199 * 1.2;
// } else if (a < 600) {
//   amount = (a - 399) * 1.8 + 200 * 1.5 + 199 * 1.2;
// } else {
//   amount = (a - 599) * 2.0 + 200 * 1.8 + 200 * 1.5 + 199 * 1.2;
// }

// let new_amount = 0;
// if (amount > 400) {
//   new_amount = amount + (amount * 15) / 100;
//   console.log(new_amount);
// } else {
//   console.log(amount);
// }

// 20. Write a program to accept a grade and declare the equivalent description :
// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here*/
// let p;
// p = "F";
// if (p == "E") {
//   console.log("Excellent");
// } else if (p == "V") {
//   console.log("Very Good");
// } else if (p == "G") {
//   console.log("Good");
// } else if (p == "A") {
//   console.log("Average");
// } else if (p == "F") {
//   console.log("Fail");
// } else {
//   console.log("Invalid value");
// }

// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here*/
// const a = 5;
// switch (a) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here*/

const d = 6;
switch (d) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  default:
    console.log("invalid number");
}

// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here*/
// let month = 10;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month");
// }

// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days
// let month = 5;
// switch (month) {
//   case 1:
//     console.log("Month have 31 days");
//     break;
//   case 2:
//     console.log("Month have 28/29 days");
//     break;
//   case 3:
//     console.log("Month have 31 days");
//     break;
//   case 4:
//     console.log("Month have 30 days");
//     break;
//   case 5:
//     console.log("Month have 31 days");
//     break;
//   case 6:
//     console.log("Month have 30 days");
//     break;
//   case 7:
//     console.log("Month have 31 days");
//     break;
//   case 8:
//     console.log("Month have 31 days");
//     break;
//   case 9:
//     console.log("Month have 30 days");
//     break;
//   case 10:
//     console.log("Month have 31 days");
//     break;
//   case 11:
//     console.log("Month have 30 days");
//     break;
//   case 12:
//     console.log("Month have 31 days");
//     break;
//   default:
//     console.log("Invalid month");
// }
