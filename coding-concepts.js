// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: ['H', 'o', 't', 'e', 'l', '', '2', '0', '2', '2']
// b) Verify and explain: As previously stated the split method used on the string created an array ['H', 'o', 't', 'e', 'l', '', '2', '0', '2', '2'] including the space between Hotel and 2022.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, Learn Student!'
// b) Verify and explain: The log was undefined. I didn't realize keyword 'return' was not used in the function.  Javascript understands a function 'greeter' exsist but could not return a value because it was not assigned.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The map method allows a developer return a new array. The map changed each value in the original array and multiplied it by two.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:  The filter method iterates an array, and allows the developer to set a condition.  If the condition evaluates to true, then a value will return.  In 'onlyOdds' function the condition evaluated each number in the array to determine if the remainder of the value did not equal zero.  If it did not equal zero it returned the value.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: 'Javascript'
// b) Verify and explain:  The log use the dot method to access the property languages in the myCodingSkils object.  Since the languages property is an array, using the brackets with a number allowed the user to access the value of an array by calling the index.  The index of zero returned a value of Javascript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
