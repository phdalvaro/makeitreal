### Exercises for practice

#### 1. Function Declaration (Beginners)

1.  **Simple Math Function**: Create a function that takes two numbers as parameters and returns their sum. Then, test the function with different inputs.
```javascript
// Ejercicios para practicar
// 1. Simple Math Function
function addNumbers(a, b) {
    return a + b;
}

// Testing
console.log(addNumbers(3, 5)); // Output: 8
console.log(addNumbers(-5, 7)); // Output: 2
```

1.  **Greeting Function**: Write a function that takes a name and an age as parameters and returns a string like "Hello, [name], you are [age] years old."
```javascript

function greet(name, age) {
    return `Hello, ${name}, you are ${age} years old.`;
}

// Testing
console.log(greet("Alvaro", 25)); // Output: Hello, Alvaro, you are 25 years old.
console.log(greet("Bithiah", 30)); // Output: Hello, Bithiah, you are 30 years old.
console.log(greet("Carlos", 35)); // Output: Hello, Carlos, you are 35 years old.
```


1.  **Temperature Converter**: Create a function that converts a temperature from Celsius to Fahrenheit and another function that converts Fahrenheit to Celsius.

```javascript
// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Testing
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(212)); // Output: 100
```


1.  **Odd or Even**: Write a function that takes a number as an argument and returns "Even" if the number is even and "Odd" if it’s odd.
```javascript
function oddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Testing
console.log(oddOrEven(4)); // Output: Even
console.log(oddOrEven(7)); // Output: Odd
console.log(oddOrEven(0)); // Output: Even

```

1.  **Find Maximum**: Create a function that takes three numbers and returns the maximum of the three.

```javascript
function findMaximum(a, b, c) {
    return Math.max(a, b, c);
}

// Testing
console.log(findMaximum(3, 7, 5)); // Output: 7
console.log(findMaximum(10, 20, 15)); // Output: 20
console.log(findMaximum(-5, 0, 5)); // Output: 5

```

#### 2. Function Expression (Beginners)

1.  **Area of a Rectangle**: Create a function expression that calculates the area of a rectangle. It should take the width and height as parameters.
```javascript

const calculateArea = function(width, height) {
    return width * height;
};

// Testing
console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(3, 7)); // Output: 21
console.log(calculateArea(8, 2)); // Output: 16
```

2.  **Anonymous Greeting**: Write an anonymous function assigned to a variable that takes a name as a parameter and logs "Good morning, [name]" to the console.
```javascript
const greet = function(name) {
    console.log(`Good morning, ${name}`);
};

// Testing
greet("Alvaro"); // Output: Good morning, Alvaro
greet("Bithiah"); // Output: Good morning, Bithiah
```

3.  **Simple Calculator**: Create function expressions for basic arithmetic operations (add, subtract, multiply, divide). Use these functions to perform calculations.
```javascript
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
};

// Testing
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(20, 5)); // Output: 4
console.log(divide(10, 0)); // Output: Cannot divide by zero
```

4.  **String Reversal**: Write a function expression that takes a string as a parameter and returns the string reversed.
```javascript
const reverseString = function(str) {
    return str.split('').reverse().join('');
};

// Testing
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
```

5.  **Factorial Function**: Implement a function expression to calculate the factorial of a given number.
```javascript
const factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

// Testing
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1
```


#### 3. Arrow Functions (Beginners)

1.  **Square Function**: Write an arrow function that takes a number as a parameter and returns its square.
```javascript
const square = num => num * num;

// Testing
console.log(square(4)); // Output: 16
console.log(square(7)); // Output: 49
console.log(square(2)); // Output: 4
```

2.  **Age in Dog Years**: Create an arrow function that converts human years to dog years (1 human year = 7 dog years).
```javascript
const humanToDogYears = humanYears => humanYears * 7;

// Testing
console.log(humanToDogYears(5)); // Output: 35
console.log(humanToDogYears(3)); // Output: 21
console.log(humanToDogYears(10)); // Output: 70
```

3.  **Odd Numbers Filter**: Write an arrow function that takes an array of numbers and returns a new array containing only the odd numbers.
```javascript
const filterOddNumbers = numbers => numbers.filter(num => num % 2 !== 0);

// Testing
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(filterOddNumbers([10, 15, 20, 25])); // Output: [15, 25]
console.log(filterOddNumbers([8, 6, 4, 2])); // Output: []
```

4.  **Sum of Array**: Create an arrow function that takes an array of numbers and returns the sum of all the numbers.
```javascript
const sumArray = numbers => numbers.reduce((acc, num) => acc + num, 0);

// Testing
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([7, 14, 21])); // Output: 42
```

5.  **Greetings Generator**: Write an arrow function that takes an array of names and returns an array of greetings, like ["Hello, Alice!", "Hello, Bob!"].
```javascript
const generateGreetings = names => names.map(name => `Hello, ${name}!`);

// Testing
console.log(generateGreetings(["Alice", "Bob", "Charlie"])); 
// Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
console.log(generateGreetings(["John", "Jane"])); 
// Output: ["Hello, John!", "Hello, Jane!"]
```

#### 4. Higher-Order Functions (Medium)

1.  **Apply Discount**: Write a higher-order function that takes a percentage discount and returns a new function. The returned function should take a price and apply the discount.
```javascript
const applyDiscount = discountPercentage => price => price * (1 - discountPercentage / 100);

// Testing
const tenPercentOff = applyDiscount(10);
console.log(tenPercentOff(100)); // Output: 90
console.log(tenPercentOff(50)); // Output: 45

const twentyPercentOff = applyDiscount(20);
console.log(twentyPercentOff(100)); // Output: 80
```

2.  **Array Mapper**: Create a higher-order function that takes an array and a function as arguments. The function should apply the passed function to each element of the array and return a new array. (Not using MAP)
```javascript
const arrayMapper = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
};

// Testing
const doubled = arrayMapper([1, 2, 3], num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

const squared = arrayMapper([4, 5, 6], num => num * num);
console.log(squared); // Output: [16, 25, 36]
```

3.  **Array Filter**: Implement a higher-order function that filters an array based on a callback function. The callback function should return `true` or `false` for each element. (Not using Filter)
```javascript
const arrayFilter = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Testing
const evens = arrayFilter([1, 2, 3, 4, 5, 6], num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

const greaterThanThree = arrayFilter([2, 4, 6, 8], num => num > 3);
console.log(greaterThanThree); // Output: [4, 6, 8]
```

4.  **Exponentiation Function**: Write a higher-order function that takes an exponent as a parameter and returns a new function that raises a number to that exponent.

```javascript
const exponentiation = exponent => base => Math.pow(base, exponent);

// Testing
const square = exponentiation(2);
console.log(square(3)); // Output: 9
console.log(square(5)); // Output: 25

const cube = exponentiation(3);
console.log(cube(2)); // Output: 8
console.log(cube(4)); // Output: 64
```

5.  **Event Listener**: Create a higher-order function that takes an event type and an element, then returns a function that can be used as an event listener for that event.
```javascript
const createEventListener = (eventType, element) => callback => element.addEventListener(eventType, callback);

// Example Usage
// Assuming we have a button with id "myButton"
const myButton = document.getElementById('myButton');

const clickListener = createEventListener('click', myButton);
clickListener(() => alert('Button was clicked!'));
// This will show an alert when the button is clicked
```

#### 5. IIFE (Immediately Invoked Function Expression) (Medium)

1.  **Counter IIFE**: Create an IIFE that initializes a counter variable and returns a function to increment the counter. Test the function to ensure the counter works.
```javascript

const counter = (function() {
    let count = 0;
    return function() {
        return ++count;
    };
})();

// Testing
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

2.  **Scoped Variables**: Use an IIFE to create a block of code where you define variables with the same names as in the global scope, but without affecting the global scope.
```javascript
const globalVar = "I'm a global variable";

(function() {
    const globalVar = "I'm a local variable inside IIFE";
    console.log(globalVar); // Output: "I'm a local variable inside IIFE"
})();

console.log(globalVar); // Output: "I'm a global variable"
```

3.  **Initialization Code**: Write an IIFE that logs a message to the console immediately when a webpage loads.
```javascript
(function() {
    console.log("Webpage has loaded successfully!");
})();

// This message will be logged immediately when the script is executed
```

4.  **Singleton Pattern (Advance)**: Implement a singleton pattern using an IIFE to ensure only one instance of an object can be created. 
```javascript
const singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Testing
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1 === instance2); // Output: true
console.log(instance1); // Output: { "I am the instance" }
```

5.  **Configuration Settings (Advance)**: Create an IIFE that initializes some configuration settings (e.g., theme, language) and provides a function to get these settings.
```javascript
const config = (function() {
    const settings = {
        theme: 'dark',
        language: 'en',
        showNotifications: true
    };

    return {
        getSetting: function(key) {
            return settings[key];
        },
        setSetting: function(key, value) {
            settings[key] = value;
        }
    };
})();

// Testing
console.log(config.getSetting('theme')); // Output: "dark"
config.setSetting('theme', 'light');
console.log(config.getSetting('theme')); // Output: "light"
```



#### 6. Closures (Medium)

1.  **Private Counter**: Create a closure that acts as a private counter. It should have methods to increment, decrement, and get the current count.
```javascript
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
counter.decrement();
console.log(counter.getCount()); // Output: 1


```
2.  **Multiplier Function**: Write a closure that takes a number as an argument and returns a function that multiplies any number by the given number.
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // Output: 10

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); // Output: 15

```
3.  **Password Protection**: Implement a closure that simulates a simple password protection mechanism. The inner function should only run if the correct password is provided.
```javascript
function secureFunction(password) {
    const correctPassword = "mySecretPassword";

    return function() {
        if (password === correctPassword) {
            console.log("Access granted!");
            // Código protegido
        } else {
            console.log("Access denied!");
        }
    };
}

const attempt1 = secureFunction("wrongPassword");
attempt1(); // Output: "Access denied!"

const attempt2 = secureFunction("mySecretPassword");
attempt2(); // Output: "Access granted!"

```
4.  **Logger with Timestamps (Advance)**: Create a logger function that logs messages with a timestamp. Use closures to maintain the timestamp format.
```javascript
function createLogger() {
    return function(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    };
}

const logger = createLogger();
logger("This is a log message."); 
// Output: "[2024-08-19T18:30:00.000Z] This is a log message."
```

5.  **Cached Function (Advance)**: Write a function that caches the results of a time-consuming operation. If the operation is called again with the same arguments, return the cached result instead of recalculating it.
```javascript
function createCachedFunction(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function timeConsumingOperation(num) {
    // Simulate a time-consuming calculation
    let result = 0;
    for (let i = 0; i < 1e6; i++) {
        result += num;
    }
    return result;
}

const cachedOperation = createCachedFunction(timeConsumingOperation);

console.log(cachedOperation(5)); // Takes time, returns the result
console.log(cachedOperation(5)); // Returns cached result instantly
```

#### 7. Callback Functions (Medium)

1.  **Data Fetcher**: Write a function that simulates fetching data from a server. It should take a callback function that processes the data once it’s retrieved.
```javascript

```

2.  **Event Handler**: Create a function that adds an event listener to a button. The event listener should trigger a callback function that changes the text of the button when clicked.
```javascript

```

3.  **Array Processor**: Implement a function that takes an array and a callback function as arguments. The callback function should process each element of the array.
```javascript

```
4.  **Sorting with Callbacks**: Write a sorting function that takes an array and a callback function to determine the order of sorting (ascending or descending).
```javascript

```

5.  **Retry Operation**: Create a function that takes another function and a number as arguments. The function should attempt to execute the passed function up to the given number of times if it fails.
```javascript


```

#### 8. Recursion

1.  **Fibonacci Sequence**: Write a recursive function that returns the nth number in the Fibonacci sequence.
```javascript

```
2.  **Sum of Array**: Implement a recursive function that calculates the sum of all elements in an array.
```javascript

```
3.  **Palindrome Check**: Create a recursive function that checks if a string is a palindrome (reads the same forwards and backwards).
```javascript

```
4.  **Flatten Array**: Write a recursive function that flattens a nested array (e.g., `[[1, 2], [3, [4, 5]]]` should become `[1, 2, 3, 4, 5]`).
```javascript

```
5.  **Tree Traversal**: Implement a recursive function to traverse a tree structure (e.g., a directory structure) and print out the name of each node.
```javascript

```

#### 9. Default Parameters

1.  **Greet with Default Name**: Write a function that greets a user with a default name if no name is provided.
```javascript

```

2.  **Power Function**: Create a function that raises a number to a power. If no power is provided, it should default to 2 (square the number).
```javascript

```
3.  **Array Filler**: Implement a function that fills an array with a specific value. If no value is provided, the default should be `0`.
```javascript

```

4.  **Discounted Price**: Write a function that calculates the price after discount. The discount should default to 10% if not provided.
```javascript


```
5.  **HTTP Request Simulation**: Create a function that simulates an HTTP request. It should take a URL and an options object. The options should have default values (e.g., method: 'GET', headers: {}) if not provided.
```javascript
  
```

## Challenges


# JavaScript Functions 




## IIFE (Immediately Invoked Function Expression)


### Beginner Exercises

1. **Simple IIFE**
   - **Objective:** Use an IIFE to create a block of code where you define variables with the same names as in the global scope, but without affecting the global scope..
```javascript


2. **Basic Counter with IIFE**
   - **Objective:** Use an IIFE to create a counter that keeps its state private and provides methods to increment and get the current count.
   - **Example:**
     ```javascript
     //after initialization ->
     counter.increment();
     console.log(counter.getCount()); // Output: 1
     ```

3. **Simple Configuration Object**
   - **Objective:** Use an IIFE to create a simple configuration object with default values.
   - **Example:**
     ```javascript
     const config = (function() { 
     // Your implementation here
     })();

     console.log(config.getConfig()); // Output: { color: 'blue', fontSize: '14px' }
     ``````
     
### Advanced Exercises

1. **Private Variable with IIFE**
   - **Objective:** Use an IIFE to create a private variable that is accessible only through specific getter and setter methods.
   - **Example:**
     ```javascript
     const module = (function() {
         // Your implementation here
     })();

     console.log(module.getVar()); // Output: 0
     module.setVar(42);
     console.log(module.getVar());
     console.log(module.getVar()); // Output: 42 
  ``


2. **Singleton Pattern with IIFE**
   - **Objective:** Implement a Singleton pattern using an IIFE to ensure only one instance of an object is created.
   - **Example:**
     ```javascript
     const singleton = (function() {
        // Your implementation here
     })();

     const obj1 = singleton.getInstance();
     const obj2 = singleton.getInstance();
     console.log(obj1 === obj2); // Output: true
     ```

3. **Module Pattern**
   - **Objective:** Use an IIFE to create a module that exposes public methods while keeping some variables and methods private.
   - **Example:**
     ```javascript
     const myModule = (function() {
         // Your implementation here
     })();

     myModule.publicMethod();
     // Output:
     // Public method
     // Private method
     // secret
     ```

4. **Lazy Initialization**
   - **Objective:** Use an IIFE to lazily initialize a variable only when it is accessed for the first time.
   - **Example:**
     ```javascript
     const lazyInit = (function() {
        // Your implementation here
     })();

     lazyInit(); // Output: Initializing...
     lazyInit(); // Output: Already initialized
     ```

5. **Configuration Module**
   - **Objective:** Create a configuration module using an IIFE that allows setting and getting configuration values in a controlled way.
   - **Example:**
     ```javascript
     const config = (function() {
         // Your implementation here
     })();

     config.set('theme', 'dark');
     console.log(config.get('theme')); // Output: dark
     ```


## Closures

### Beginner Exercises

1. **Simple Counter**
   - **Objective:** Create a `createSimpleCounter` function that returns a function which, when called, increments and returns a counter.
   - **Example:**
     ```javascript
     function createSimpleCounter() {
         // Your implementation here
     }

     const counter = createSimpleCounter();
     console.log(counter()); // Output: 1
     console.log(counter()); // Output: 2
     ```

2. **Greeting Generator**
   - **Objective:** Create a function `greet(name)` that returns another function. The returned function should take a greeting message and log a full greeting using the name and message.
   - **Example:**
     ```javascript
     function greet(name) {
         // Your implementation here
     }

     const greetJohn = greet('John');
     greetJohn('Hello'); // Output: Hello, John!
     ```

3. **Multiplier Function**
   - **Objective:** Create a `createMultiplier` function that takes a number `n` and returns a new function that multiplies its input by `n`.
   - **Example:**
     ```javascript
     function createMultiplier(n) {
         // Your implementation here
     }

     const double = createMultiplier(2);
     console.log(double(5)); // Output: 10
     ```


### Advanced Exercises

1. **Memoization Function**
   - **Objective:** Create a function `memoize(fn)` that returns a memoized version of any single-argument function. The memoized function should cache the results of previous calls and return the cached result for the same inputs without recomputing.
   - **Example:**
     ```javascript
     function memoize(fn) {
         // Your implementation here
     }

     const slowSquare = (n) => { 
         for(let i = 0; i < 1000000000; i++) {} // Simulate slow computation
         return n * n;
     };

     const fastSquare = memoize(slowSquare);
     console.log(fastSquare(5)); // Slow on first call
     console.log(fastSquare(5)); // Fast on second call
     ```

2. **Private Counter with Reset**
   - **Objective:** Create a `createCounter` function that returns an object with two methods: `increment` and `reset`. `increment` should increase the counter by 1 each time it’s called, and `reset` should reset the counter to 0. Use closures to keep the counter private.
   - **Example:**
     ```javascript
     function createCounter() {
         // Your implementation here
     }

     const counter = createCounter();
     console.log(counter.increment()); // Output: 1
     console.log(counter.increment()); // Output: 2
     counter.reset();
     console.log(counter.increment()); // Output: 1
     ```

3. **Once Function**
   - **Objective:** Implement a function `once(fn)` that allows the passed function to be executed only once. Any subsequent calls should return the result of the first invocation.
   - **Example:**
     ```javascript
     function once(fn) {
         // Your implementation here
     }

     const logOnce = once((msg) => console.log(msg));
     logOnce("Hello!"); // Output: Hello!
     logOnce("Hello again!"); // No output
     ```

4. **Curry Function**
   - **Objective:** Create a function `curry(fn)` that transforms a function with multiple arguments into a series of functions that take one argument and return another function, until all arguments have been provided.
   - **Example:**
     ```javascript
     function curry(fn) {
         // Your implementation here
     }

     function add(a, b, c) {
         return a + b + c;
     }

     const curriedAdd = curry(add);
     console.log(curriedAdd(1)(2)(3)); // Output: 6
     ```

5. **Function Composition**
   - **Objective:** Create a `compose` function that takes multiple functions as arguments and returns a new function. The new function should be the result of applying the original functions in sequence, from right to left.
   - **Example:**
     ```javascript
     function compose(...fns) {
         // Your implementation here
     }

     const add1 = (x) => x + 1;
     const double = (x) => x * 2;
     const subtract3 = (x) => x - 3;

     const composed = compose(subtract3, double, add1);
     console.log(composed(5)); // Output: 9
     ```



## Higher-Order Functions


### Beginner Exercises

1. **Basic Callback Example**
   - **Objective:** Write a function `withDelay(callback, delay)` that takes a callback function and a delay in milliseconds, and executes the callback after the delay using `setTimeout`.
   - **Example:**
     ```javascript
     function withDelay(callback, delay) {
         // Your implementation here
     }

     withDelay(() => console.log("This is delayed"), 1000); // Output after 1 second: "This is delayed"
     ```

2. **Simple Array Filter**
   - **Objective:** Create a `filterArray` function that takes an array and a callback function. The callback should be used to determine which elements should be included in the returned array.
   - **Example:**
     ```javascript
     function filterArray(arr, callback) {
         // Your implementation here
     }

     const numbers = [1, 2, 3, 4, 5];
     const evens = filterArray(numbers, x => x % 2 === 0);
     console.log(evens); // Output: [2, 4]
     ```

3. **Function Timer**
   - **Objective:** Write a `timeFunction` function that takes another function `fn` and times how long it takes to execute, logging the time to the console.
   - **Example:**
     ```javascript
     function timeFunction(fn) {
         const start = Date.now();
         fn();
         const end = Date.now();
         console.log(`Function took ${end - start}ms to execute.`);
     }

     timeFunction(() => {
         for (let i = 0; i < 1000000; i++) {} // Some computation
     });
     ```



### Advanced Exercises

1. **Function Debouncing**
   - **Objective:** Implement a debouncing function `debounce(fn, delay)` that ensures the given function `fn` is only called after it has stopped being called for `delay` milliseconds.
   - **Example:**
     ```javascript
     function debounce(fn, delay) {
         // Your implementation here
     }

     const log = debounce(() => console.log('Debounced!'), 500);
     log();
     log();
     log(); // Only one "Debounced!" should appear after 500ms
     ```

2. **Throttle Function**
   - **Objective:** Implement a throttling function `throttle(fn, interval)` that ensures the given function `fn` is called at most once every `interval` milliseconds.
   - **Example:**
     ```javascript
     function throttle(fn, interval) {
         // Your implementation here
     }

     const log = throttle(() => console.log('Throttled!'), 500);
     log();
     log(); // Only one "Throttled!" should appear every 500ms
     ```

3. **Custom Map Function**
   - **Objective:** Create a `customMap` function that mimics the behavior of the `Array.prototype.map` method. The function should take an array and a callback, and return a new array with the results of applying the callback to each element.
   - **Example:**
     ```javascript
     function customMap(arr, callback) {
         // Your implementation here
     }

     const numbers = [1, 2, 3];
     const doubled = customMap(numbers, x => x * 2);
     console.log(doubled); // Output: [2, 4, 6]
     ```

4. **Compose Functions**
   - **Objective:** Implement a `compose` function that takes multiple functions as arguments and returns a function that is the result of composing the original functions from right to left.
   - **Example:**
     ```javascript
     function compose(...fns) {
         // Your implementation here
     }

     const add1 = x => x + 1;
     const double = x => x * 2;

     const composed = compose(add1, double);
     console.log(composed(5)); // Output: 11 (double(5) => 10, add1(10) => 11)
     ```

5. **Partial Application**
   - **Objective:** Implement a function `partial(fn, ...presetArgs)` that partially applies a function by pre-setting some of its arguments.
   - **Example:**
     ```javascript
     function partial(fn, ...presetArgs) {
         // Your implementation here
     }

     const add = (a, b, c) => a + b + c;
     const add5 = partial(add, 5);

     console.log(add5(10, 15)); // Output: 30
     ```
### Explanation of `partial` Function

The `partial` function takes two things:

1.  **`fn`**: The original function that you want to partially apply.
2.  **`...presetArgs`**: The arguments that you want to pre-set or fix in the original function.

When you call `partial`, it returns a new function. This new function, when called, will call the original function `fn` with the preset arguments (`presetArgs`) plus any additional arguments that are passed to the new function.

### Example Breakdown

Let's break down the process with an example.

#### Step 1: Define the Original Function

Suppose you have a function `add` that takes three arguments:
```javascript
function add(a, b, c) {
    return a + b + c;
}
```
#### Step 2: Create a Partial Function

Now, you want to create a new function where one of the arguments (let's say `a`) is pre-set to a specific value (e.g., `5`):
```javascript
const add5 = partial(add, 5);
```

n this example, `add5` is a new function where the first argument is fixed as `5`. You can now call `add5` with the remaining two arguments `b` and `c`.

#### Step 3: Use the Partial Function

When you call `add5` with the remaining arguments, like this:
```javascript
console.log(add5(10, 15)); // Output: 30
```

It will be equivalent to calling `add(5, 10, 15)`, which results in `5 + 10 + 15 = 30`.

### Recursion Exercises

#### Beginner Level

1.  **Factorial Calculation**
    
    -   **Objective:** Write a recursive function `factorial(n)` that computes the factorial of a non-negative integer `n`. The factorial of `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.
    -   **Example:**
        
```javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // Output: 6 (3! = 3 * 2 * 1)
```
**Fibonacci Sequence**

-   **Objective:** Write a recursive function `fibonacci(n)` that returns the `n`-th number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers.
-   **Example:**
```javascript
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)
```
**Sum of Array**

-   **Objective:** Write a recursive function `sumArray(arr)` that calculates the sum of all elements in an array `arr`.
-   **Example:**
```javascript
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30
```
#### Advanced Level

1.  **Flatten Nested Arrays**
    
    -   **Objective:** Write a recursive function `flatten(arr)` that takes a nested array and returns a flat array with all elements at the same level.
    -   **Example:**
        
```javascript
function flattenArray(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, [4, [5]]]])); // Output: [1, 2, 3, 4, 5]
```