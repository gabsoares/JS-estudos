
// ***DISCOVERING VARIABLES 

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// let firstName = 'Gabriel';
// console.log(firstName);


//Use variables like that - Variable Conventions
let myFirstJob = 'Storage Assistant';
let myCurrentJob = 'Telemarketing Operator';

//Variables like below is very generic, use like above
let job1 = 'assistant';
let job2 = 'telemarketing';

// *----------------------------------------------------------------*
// ***DATA TYPES
let javascriptIsFun = true;
console.log(typeof javascriptIsFun); //Boolean
//We can change the value of variable, redeclaring that.;
javascriptIsFun = 'YES!'
let birthYear;
let emptyVariable = null;
console.log(typeof javascriptIsFun, birthYear, emptyVariable); //String, Undefined, Null

// *----------------------------------------------------------------*

// ***Exercise DATA TYPES

let country = 'Brazil'; //String
let continent = 'America'; // String
let population = 232; // Number
let isIsland = false; // Boolean
let language; // Undefined

console.log(typeof country, population, isIsland, language);

// *----------------------------------------------------------------*

//LET, CONST AND VAR
// We can mutate variable when we use "let", this is impossible with "const"
let age = 15;
age = 20

/* This is wrong
const birtDay = 11;
birtDay = 12;

We can't declare a empty const, like that
const = age;
*/

// *----------------------------------------------------------------*
// *** BASIC OPERATORS

//**Math Operators
// -
const now = 2037;
const ageGabriel = now - 2001;
const ageJana = now - 2020;
console.log(ageGabriel, ageJana);

// * / **
console.log(ageGabriel * 2, ageGabriel / 10, 2 ** 3);

const firstName = 'Gabriel';
const lastName = 'Soares';
//It's better to use template strings -> console.log(`${firstname} ${lastname}`)
console.log(firstName + '' + lastName); //Gabriel Soares

//**Assignment operators
let i = 10 + 5; //15
i += 10; //i = i + 10 (25)
i *= 4; //i = i * 4 (100)
i++ // i = i + 1 (101)
i-- // i = i - 1 (100)
i-- // i = i - 1 (99)
console.log(i);

//Comparison operators ->   >, <, >=, <=
console.log(ageGabriel > ageJana); //true
console.log(ageJana >= 18); //false

//Operator Precedence
const currentYear = 2040;
const myCurrentAge = currentYear - 2001;
const myLastAge = currentYear - 2018
console.log(currentYear - 2001 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5; //It logs 10 10

const averageAge = (ageGabriel + ageJana) / 2
console.log(averageAge);


console.log('*******This is the first code challenge#01*******');
//CHALLENGE #01
// let markHeight = 1.69;
// let markMass = 78;

// let jonhHeight = 1.95;
// let johnMass = 92;

// //IMC Calculator, both versions are right
// const imcJohnCalculator = johnMass / (jonhHeight * jonhHeight); // IMC of John
// const imcMarkCalculator = markMass / markHeight ** 2; // IMC of Mark

// //Validating that Mark have higher BMI than John
// const markHeigherBMI = imcMarkCalculator > imcJohnCalculator;
// console.log(imcJohnCalculator, imcMarkCalculator, markHeigherBMI);

// //Template String to concatanate the string with variables
// console.log(`Marks weights ${markMass} kg and is ${markHeight}m tall. John weights ${johnMass} kg and is ${jonhHeight}m tall`);

// markMass = 95;
// markHeight = 1.88;

// johnMass = 85;
// jonhHeight = 1.76;

// const BMIJohn = johnMass / (jonhHeight * jonhHeight); // IMC of John
// const BMIMark = markMass / markHeight ** 2; // IMC of Mark

// const johnHeigherBMI = BMIJohn > BMIMark;

// console.log(`Marks weights ${markMass} kg and is ${markHeight}m tall. John weights ${johnMass} kg and is ${jonhHeight}m tall`);

// console.log(BMIJohn, BMIMark, johnHeigherBMI);


/*
Marks weights 78 kg and is 1.69m tall. John weights 92 kg and is 1.95m tall
Marks weights 95 kg and is 1.88m tall. John weights 85 kg and is 1.76m tall
*/
console.log('*******End of code challenge*******');
// *----------------------------------------------------------------*
console.log('Learning to use template strings and wrap lines with literal template');
const userName = 'FlokiGC';
const job = 'Telemarketing Operator';
const realBirthYear = 2001;
const year = 2040;
const currentOld = year - realBirthYear;

const floki = "I'm " + userName + ', a ' + (year - realBirthYear) + ' years old ' + job + '!';
console.log(floki);

const flokiNew = `I'm ${userName}, a ${currentOld} years old ${job}!`
console.log(flokiNew);

//To wrap line is very simple using template string, look below
console.log(`String
With
Multiple
Lines`);

//If Else
console.log('***Learning If/Else***');

const ageSarah = 15;

if (ageSarah >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearLeftToDrive = 18 - ageSarah;
    console.log(`Need to wait more ${yearLeftToDrive} years to drive`);
}

const birthYearPedro = 2000;
let century;
if (birthYearPedro <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

console.log('*******End of second code challenge#02*******');
//CODE CHALLENGE#02

// let markHeight = 1.69;
// let markMass = 78;

// let jonhHeight = 1.95;
// let johnMass = 92;


// const BMIJohn = johnMass / (jonhHeight * jonhHeight);
// const BMIMark = markMass / markHeight ** 2;

// if (BMIJohn > BMIMark) {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }

console.log('*******This is the final of the second code challenge#02*******');

console.log('***Type Conversion and Coercion***');

//**Type Conversion
const inputYear = "2001"
//Converting string to a number
console.log(Number(inputYear), inputYear); // Number, String

console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN - Not a number

//Converting a number to string
console.log(String(23), 23); // String, Number

//**Type Coercion
console.log('I am ' + 23 + ' years old'); //Number automaticcally converted to string
console.log('23' - '10' - 3); //String automaticcally converted to numbers
console.log('10' * '2');

/* Explicação em português
O operador "+" faz os números se converterem em strings, assim são concatenados, porém os outros operadores transformam essas strings em números
*/

let n = '1' + 1; //Converted to string, result = 11
console.log(n); // String
console.log(n = n - 1);  //Result = 10 *Number*

// *----------------------------------------------------------------*

console.log('***Truthy and Falsy Values***');

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //False
console.log(Boolean('')); //False
console.log(Boolean(undefined)); //True
console.log(Boolean({})); //True
console.log(Boolean('Gabriel')); //True

const money = 0; //Aqui como explicado acima, é falso. Logo, quando é falso o else será executado
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is UNDEFINED!');
}

// *----------------------------------------------------------------*
console.log('***Equality Operators***');

const fantasyAge = 20;

// "==" faz coerção de tipo "===" é um operador de igualdade restrita, precisam ser do mesmo valor e tipo
if (age === 20) console.log('You just became an adult');

//Receber input do usuário já transformando em número
// const favouriteNumber = Number(prompt("What's your favourite number?"))
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);

// if (favouriteNumber === 5) {
//     console.log('Cool, 5 is an amazing number');
// } else if (favouriteNumber === 13) {
//     console.log('13 is also a cool number');
// } else if (favouriteNumber === 20) {
//     console.log('20 is very cool!');
// } else {
//     console.log('Your number is not cool!');
// }

// if (favouriteNumber !== 5) console.log('Why not 5?');

// *----------------------------------------------------------------*

console.log('***Logical Operators***');

// AND operator "&&" |  OR operator "||"  |  NOT operator "!"

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Gabriel is able to drive');
// } else {
//     console.log("Gabriel isn't able to drive");
// }

const isTired = true; //C
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Gabriel is able to drive');
} else {
    console.log("Gabriel isn't able to drive");
}
// *----------------------------------------------------------------*

console.log('*******This is the second code challenge#03*******');

const averageDolphins = (97 + 112 + 80) / 3;
const averageKoalas = (109 + 95 + 50) / 3;



//****TASK 1 and 2 - DONE
// if (averageDolphins > averageKoalas) {
//     console.log(`Congratulations, the Dolphins are the big winners!`);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`OMG! This is a draw`);
// } else if (averageKoalas > averageDolphins){
//     console.log(`Congratulations, the Koalas are the big winners!`);
// }

//****BONUS 1 and 2 - DONE
// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins Win`);
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
//     console.log('OMG! This is a DRAW!');
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log(`Koalas Win`);
// } else {
//     console.log(`We don't have a winner today`);
// }


console.log('*******End of second code challenge#03*******')