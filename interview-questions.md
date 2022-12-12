# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: *Parameters and arguments have a few differences between them.  When working with parameters, they are typically used with functions and can be considered placeholders for the function.  This is a way some data, such as a string, number, array, and other data types, can pass through the function and produce some output or data, as for an argument, typically passed when a method or a function is invoked.  This gives the data through the method or function. For example, let’s say there’s an array of numbers that contain the values of [10, 11, 12, 13, 14, 15, 16].  Now, let’s extract only the even numbers from within the array.  From there, a function can be created like this:*
```javascript
    const arrayOfNumbers = [10, 11, 12, 13, 14, 15, 16] 
    const evenNumbers = (array) => {
        return array.filter(value =>  value % 2 === 0)
    }

    evenNumbers(arrayOfNumbers)) 
```
*So the parameter in this function is called an array, where the arrayOfNumbers will pass through the function, producing a new array containing only even numbers.  Afterward will invoke the function and use the argument arrayOfNumbers.*

Researched answer: *Functions are considered a cornerstone of Javascript programming.  A function is a powerful tool for developers’ arsenal.  Aside from the reusability of a function, what makes them even more powerful is how parameters and arguments interact with a function.  Parameters are the variables, or generic placeholders, of a function.  Arguments are the data passed into the method’s parameters.  For example, let’s create a function with a parameter that takes in some numbers to return the perimeter of any quadrilateral.*
```javascript
    const quadPerimeter = (s1, s2, s3, s4) = {
        return s1 + s2 + s3 + s4
    }

    quadPerimeter(5, 10, 5, 10)
```
*This function contains four parameters, s1, s2, s3, and s4, and will execute when the function is invoked with data 5, 10, 5, and 10.  This data will pass through the functions parameters or variables and return the perimeter of the quadrilateral.  Because the function contains these parameters, arguments can pass through the function when invoked, making it reusable, hence a powerful tool.*

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: *In Javascript, the built in method .map() is a higher-order function that iterates through an array, much like a for loop, and takes in three parameters, typically named: value, index, and array.  Each parameter has a specific role in the .map() method and can return detailed data dependent on the parameter used.  The first parameter, value, is always required and is the value of an array at the current iteration.  The second parameter, index, is the index of the array at the current iteration and is considered optional.  The index parameter will return the index of the value in the existing array.  The last parameter, array, which is also optional, will return an array the higher-order function was called on.*

Researched answer: *n Javascript, the built-in method .map() is a higher-order function that iterates through an array, much like a for loop.  The method takes in three parameters, which can take on any name, but for this discussion, I’ll use value, index, and array to understand each parameter’s job better.  The first parameter, value, is the current value of the iteration.  For example, if we have an array of odd numbers 1, 3, 5, 7, 9, and 11, we can create a function that will turn each odd number into an even number by multiplying each value by two while using the .map() method.  We can use the value parameter to multiply each value by 2, the index parameter to see the index of each value, and the array parameter to see the array that was called with the map method.*

3. What is the difference between map and filter?

Your answer: *In Javascript, the difference between the map and filter method is that the map method is used to iterate through an array and returns a new one.  Typically this method is used to change the value of each array, like multiplying each value by three.  The filter method also iterates through an array; however, the values returned are based on the conditions set and met.  The filter method can iterate through an array of numbers and return only even values.*

Researched answer: *In Javascript, the built-in methods map and filter, have some differences.  When each method is applied to an array, the return value of each varies.  For instance, the map method will iterate an array and return a new array.  The map method allows the developer to change the array’s value depending on the manipulation applied to the method.  For example, let’s say we have an array containing the price of various items.  Let’s also say we want to increase the cost of said items by 10 percent.  Using the map method, we could iterate through the array and apply the increase to each price by 10 percent, returning a new array with the increase applied.  Even though the filter method iterates through an array the same as the map method, the return value for the filter method is different.  The return value of a filter method is based on the condition a developer may set.  In essence, the developer is only seeking specific values that return to true to the chosen condition.  For example, let’s say we have an array containing age, income, and credit score values.  A developer can search the array where the age is greater than 30, income is higher than 50,000, and credit score is greater than 700.  If each condition returns true, then the filter method will return all values where the conditions were true.*

4. What is iteration?

Your answer: *In Javascript, iteration is the continuous execution of code or instructions until a condition has been met, typically established by the developer.*

Researched answer: *In Javascript, iteration is the execution of code to traverse through each item in an array or properties of an object.  To iterate through a collection of items (arrays or properties of objects), a developer can use ‘for’ loops, ‘while’ loops, and ‘do…while’ loops.  Each loop varies in execution, but the loops will allow iteration.  For example, the ‘for’ loop will require a counter variable to be initialized, a boolean condition that evaluates each before the loop iterates, and will execute code if the condition is true.  Lastly, the ‘for’ loop will need a counter expression, which increments or decrements at the end of the iteration.  A more efficient way a developer can iterate through a collection of items is to utilize Javascript’s built-in methods.  Two standard methods are the map and filter methods.  Each method can return a new array or values if a condition evaluates to true.*

5. What is the difference between a class and an object?

Your answer: *The difference between an object and a class is an object is a collection of attributes that belong to an entity.  A class helps developers create a recipe to build objects.*

Researched answer: *A class acts like a template for objects.  A class defines object properties, and behavior and is reusable, much like a function.  An object, on the other hand, contain explicitly defined values.  An object is also an instance of a class.*

6. STRETCH: What is hoisting in JavaScript?

Your answer: *Hoisting is when a function is called before the declaration of a function.* 

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: *It is a feature written from the point of view of a user and describes how a particular feature will function and bring value to the end user.*

2. Spread operator: *It is a way to copy an array or object.*

3. React state: *It is an object in React that contains data about a component.*

4. React props: *Stands for properties, and are arguments passed to components.*

5. DOM events: *This allows Javascript to handle events, like clicking a mouse or keyboard.*