'use strict'
//Modo estrita nos ajuda a perceber nossos erros e mostram para o console, como abaixo
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

//************************************************************ */

console.log('***LEARN FUNCTIONS***');


function logger() {
    console.log('My name is Gabriel');
}

// calling, running, invoking a function
logger();

// //function (parameter, parameter)
// function fruitProcessor(apples, oranges){
//     const juice =  `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// //function(argument)
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//************************************************************ */
console.log('***FUNCTIONS DECLARATIONS VS EXPRESSIONS');

// FUNCTION DECLARATION
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return `You have ${age} years old`
}

const yearsOld = calcAge1(2001);
console.log(yearsOld);

// FUNCTION EXPRESSION
const calcAge2 = function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const yearsOld2 = calcAge2(2001)
console.log(yearsOld2);

//************************************************************ */
// console.log('***ARROW FUNCTION***');

// //Com um parâmetro
// const calcAge3 = birthYear => 2037 - birthYear
// const yearsOld3 = calcAge3(2001);
// console.log(yearsOld3);

// //Com dois ou mais parâmetros
// const yearsUltilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear
//     const retirement = 65 - age;

//     return `${firstName} se aposentará em ${retirement} anos.`
// }

// console.log(yearsUltilRetirement(2001, 'Gabriel'));

//************************************************************ */
console.log('***FUNCTIONS CALLING OTHER FUNCTIONS***');

const cutPieces = fruit => fruit * 4;


function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}

console.log(fruitProcessor(2, 4));

//************************************************************ */
console.log('***REVIEWING FUNCTIONS***');

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}


const yearsUltilRetirement = (birthYear, firstName) => {

    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement; //Quando temos return, a função imediatamente acaba, ou seja, tudo abaixo do return é ignorado
    } else {
        console.log(`${firstName} has already retired!!!!`);
        return -1;
    }

}

console.log(yearsUltilRetirement(2001, 'Gabriel'));
console.log(yearsUltilRetirement(1950, 'Eduardo'));

//************************************************************ */

console.log('***CODE CHALLENGE #01');

const calcAverage = (a, b, c) => (a + b + c) / 3

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('Nobody wins');
    }

}

checkWinner(scoreDolphins, scoreKoalas);

console.log('***END OF CODE CHALLENGE #01');

//************************************************************ */

console.log('***ARRAYS BASICS***');

const friends = ['Thiago', 'Pathy', 'Janaína', 'Eric'];
console.log(friends);

//Para pegar o último elemento do array
console.log(friends[friends.length - 1]);

friends[0] = 'Sara';
console.log(friends);

const firstNameArray = 'Gabriel'
const gabrielInfos = [firstNameArray, 'Soares', 2021 - 2001, 'student', friends]

console.log(gabrielInfos);

//Exercício
const calcAgeGabriel = function (birthYear) {
    return 2021 - birthYear;
}
const yearsCalc = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAgeGabriel(yearsCalc[0]), calcAgeGabriel(yearsCalc[1]), calcAgeGabriel(yearsCalc[yearsCalc.length - 1])]

console.log(ages);

//************************************************************ */
console.log('***ARRAYS OPERATIONS***');
