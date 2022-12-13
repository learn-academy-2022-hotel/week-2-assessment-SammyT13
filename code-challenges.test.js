// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.

// Test 1
describe('divisibleByThree', () => {
    it('the number inside it is evenly divisible by three or not', () => {
        expect(divisibleByThree(object1)).toEqual('15 is divisible by three')
        expect(divisibleByThree(object2)).toEqual('0 is divisible by three')
        expect(divisibleByThree(object3)).toEqual('-7 is not divisible by three')
    })
})

// *** Test Failed *** //
// FAIL  ./code-challenges.test.js
// divisibleByThree
//   ✕ the number inside it is evenly divisible by three or not (1 ms)

// ● divisibleByThree › the number inside it is evenly divisible by three or not

//   ReferenceError: divisibleByThree is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// declare a function called divisibleByThree takes in an object that determines if the number inside the object is divisble by 3
// input: Three objects: const object1 = { number: 15 }, const object2 = { number: 0 }, const object3 = { number: -7 }
// output: "15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three"
//  if else statment
// condition if number divided by 3 returns 0 remainder then divisible by three
// else number is not divisible by three

const divisibleByThree = (objectNumber) => {
    return objectNumber.number % 3 === 0 ? `${objectNumber.number} is divisible by three` : `${objectNumber.number} is not divisible by three`
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ the number inside it is evenly divisible by three or not (2 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Test 2

describe('upperCaseFirstLetter', () => {
    it('takes in an array of words and returns an array with all the words capitalized', () => {
        expect(upperCaseFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(upperCaseFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
}) 

// *** Test Failed *** //
// FAIL  ./code-challenges.test.js
// upperCaseFirstLetter
// ✕ takes in an array of words and returns an array with all the words capitalized (2 ms)

// ● upperCaseFirstLetter › takes in an array of words and returns an array with all the words capitalized

// ReferenceError: upperCaseFirstLetter is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// PSUEDOCODE
// declare a function called upperCaseFirstLetter that takes in an array of strings.  
// input: ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// input: ["temperature", "database", "chopsticks", "mango"]
// output: ["Temperature", "Database", "Chopsticks", "Mango"]

// use the map method to iterate an array and return a new array
// index the first value of each string and use the toUpperCase method to upper case first letter
// concact the rest of the string with the substring method

const upperCaseFirstLetter = (array) => {
    return array.map((value) => value[0].toUpperCase().concat(value.substring(1)))
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// upperCaseFirstLetter
// ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Test 3

describe('firstVowelIndex', () => {
    it('takes in a string and logs the index of the first vowel', () => {
        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})

// *** Test Failed *** //
// FAIL  ./code-challenges.test.js
// firstVowelIndex
// ✕ takes in a string and logs the index of the first vowel (1 ms)

// ● firstVowelIndex › takes in a string and logs the index of the first vowel

// ReferenceError: firstVowelIndex is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// PSUEDOCODE
// Function Signature
// input: string
// output: number

// input: 'learn'
// output: 1

// input: 'academy'
// output: 0

// input: 'challenges'
// output: 2

// Processs
// declare a function called  firstVowelIndex that takes in a string
// for loop to iterate the string
// if statement
// checks if a character of string equals a, e, i, o, or u
// returns the index value of first vowel

const firstVowelIndex = (string) => {
    
    for (let i = 0; i < string.length; i++) {

        if(string.charAt(i).toLowerCase() === 'a' || string.charAt(i).toLowerCase() === 'e' || string.charAt(i).toLowerCase() === 'i' || string.charAt(i).toLowerCase() === 'o' || string.charAt(i).toLowerCase() === 'u') {
            return i
        }
    }

}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// firstVowelIndex
// ✓ takes in a string and logs the index of the first vowel