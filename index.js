let ageUserInput = prompt('Enter your age:')

switch (ageUserInput) {
    case '0':
        console.log('You are left with 18 years to drive.')
        break;
    case '1':
        console.log('You are left with 17 years to drive.')
        break;
    case '2':
        console.log('You are left with 16 years to drive.')
        break;
    case '3':
        console.log('You are left with 15 years to drive.')
        break;
    case '4':
        console.log('You are left with 14 years to drive.')
        break;
    case '5':
        console.log('You are left with 13 years to drive.')
        break;
    case '6':
        console.log('You are left with 12 years to drive.')
        break;
    case '7':
        console.log('You are left with 11 years to drive.')
        break;
    case '8':
        console.log('You are left with 10 years to drive.')
        break;
    case '9':
        console.log('You are left with 9 years to drive.')
        break;
    case '10':
        console.log('You are left with 8 years to drive.')
        break;
    case '11':
        console.log('You are left with 7 years to drive.')
        break;
    case '12':
        console.log('You are left with 6 years to drive.')
        break;
    case '13':
        console.log('You are left with 5 years to drive.')
        break;
    case '14':
        console.log('You are left with 4 years to drive.')
        break;
    case '15':
        console.log('You are left with 3 years to drive.')
        break;
    case '16':
        console.log('You are left with 2 years to drive.')
        break;
    case '17':
        console.log('You are left with 1 year to drive.')
        break;
    default :
        console.log('You are old enough to drive.')
        break;
}

let myAge = prompt("Enter number", "number goes here");
let yourAge = prompt("Enter number", "number goes here");
if (myAge > yourAge) {
    console.log('I am older than you.')
} else if (myAge === yourAge) {
    console.log('We are the same age.') 
} else {
    console.log('You are older than me')
}

let a = 4
let b = 3
if (a > b) {
    console.log('a is greater than b.')
} else {
    console.log('a is less than b.')
}

let isGreater = true
isGreater
? console.log('a is greater than b.')
: console.log('a is less than b.');

let number = 2
let remainder = (number % 2)

if (remainder == 0) {
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}

let number1 = 9
let remainder1 = (number1 % 2)

if (remainder1 == 0) {
    console.log(`${number1} is even`)
} else {
    console.log(`${number1} is odd`)
}