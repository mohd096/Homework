//  Javascript LAB
 
 
 /*-----------------------------------------------------------------
Challenge: 00-sayHello (example)
Difficulty: Basic
Prompt:
Write a function called sayHello that returns the string "Hello!".
Examples:
sayHello() //=> Hello!
-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
    console.log('Hello!')
   
  }
 sayHello('Hello!')
  
  /*-----------------------------------------------------------------
  Challenge: 01-addOne
  Difficulty: Basic
  Prompt:
  Write a function called addOne that takes a single number as an argument and returns that number plus 1.
  Examples:
  addOne(1) //=> 2
  addOne(-5) //=> -4
  -----------------------------------------------------------------*/
  // Your solution for 01-addOne here:
  
  function addOne(numberOne, numberTwo){
      console.log(numberOne+numberTwo)
    
  }
    addOne(2,5)
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 02-addTwoNumbers
  Difficulty: Basic  
  Prompt:
  Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
  If either argument is not a Number, return the value of NaN.
  Examples:
  addTwoNumbers(5, 10) //=> 15
  addTwoNumbers(10, -2) //=> 8
  addTwoNumbers(0, 0) //=> 0
  addTwoNumbers('Hello', 5) //=> NaN
  -----------------------------------------------------------------*/
  // Your solution for 02-addTwoNumbers here:

  function addTwoNumbers(num1, num2) {
  if (num1 || num2 < 0) {
    return num1 + num2;

  } else {
    return NaN;
    
  }
}
console.log(addTwoNumbers(3, 5));

  
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 03-sumNumbers
  Difficulty: Basic  
  Prompt:
  - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
  - If the array is empty, return 0 (zero).
  Examples:
  sumNumbers([10]) //=> 10
  sumNumbers([5, 10]) //=> 15
  sumNumbers([2, 10, -5]) //=> 7
  sumNumbers([]) //=> 0
  -----------------------------------------------------------------*/
  // Your solution for 03-sumNumbers here:
  
  function sumNumbers(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
    
  }
  
  console.log(sumNumbers([5, 2, 8]));
  console.log(sumNumbers([]))
  
  /*-----------------------------------------------------------------
  Challenge: 04-addList
  Difficulty: Basic
  Prompt:
  - Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
  - Assume all parameters will be numbers.
  - If called with no arguments, return 0 (zero).
  Examples:
  add(1) //=> 1
  add(1,50,1.23) //=> 52.23
  add(7,-12) //=> -5
  -----------------------------------------------------------------*/
  // Your solution for 04-addList here:
  
  function addList () {
    console.log(arguments)

    var sum = 0
    for (var i = 0 ; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
    }
  console.log(addList(8 , 9 , 3))
  console.log(addList(6 , 7 ,6 ,10 ,25))
  console.log(addList(4 , 12 , 10, 4))
  console.log(addList())


  
  
  
  /*-----------------------------------------------------------------
  Challenge: 05-computeRemainder
  Difficulty: Basic
  Prompt:
  - Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
  - The first argument should be the dividend and the second argument should be the divisor.
  - If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
  - For extra fun, complete this challenge without using the modulus (%) operator.
  Examples:
  computeRemainder(10,2) //=> 0
  computeRemainder(4,0) //=> Infinity
  computeRemainder(10.5, 3) //=> 1.5
  -----------------------------------------------------------------*/
  // Your solution for 05-computeRemainder:
  function computeRemainder(num1, num2) {
    if (num2 === 0)
    return Infinity
    let division = Math.abs(num1/num2)
    let decimal = division - Math.floor(division)
    return parseFloat((decimal * num2).toFixed(5))
  }

console.log(computeRemainder(10 ,2))
console.log(computeRemainder(4 ,0))
console.log(computeRemainder(10.5 ,3))
 
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 06-range
  Difficulty: basic
  Prompt:
  - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
  - The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
  Examples:
  range(1,4) //=> [1,2,3]
  range(-2, 3) //=> [-2,-1,0,1,2]
  range(1,1) //=> []
  range(5,2) //=> "First argument must be less than second"
  -----------------------------------------------------------------*/
  // Your solution for 06-range here:

  function range(argument1, argument2) {
    if (num1 > num2) return "First argument must be less than second"
     else {
       let arr = []
       for (i=num1; i<num2; i++) {
         arr.push(i)
       }
       return arr
     }
   }
   
   num1 = 1
   num2 = 4
   console.log(range())
   num1 = -2
   num2 = 3
   console.log(range())
   num1 = 1
   num2 = 1
   console.log(range())
   num1 = 5
   num2 = 2
   console.log(range())

  
  
  /*-----------------------------------------------------------------
  Challenge: 07-reverseUpcaseString
  Difficulty: Basic
  Prompt:
  - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.
  Examples:
  reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
  -----------------------------------------------------------------*/
  // Your solution for 07-reverseUpcaseString here:
  
  function reverseUpcaseString(string) {
    return string.split("").reverse().join("").toUpperCase()
  }
  
  console.log(reverseUpcaseString('Hello'))
  console.log(reverseUpcaseString('Mohaamed'))
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 08-removeEnds
  Difficulty: Basic
  Prompt:
  - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
  - If the length of the string argument is less than 3, return an empty string.
  Examples:
  removeEnds('SEI Rocks!'); //=> "DI Rocks"
  removeEnds('a'); //=> "" (empty string)
  -----------------------------------------------------------------*/
  // Your solution for 08-removeEnds here:
  
  function removeEnds(string) {
    return string.slice(1, -1)
  }
  
  console.log(removeEnds('SEI Rocks!'))
  console.log(removeEnds('a'))
  
  
  /*-----------------------------------------------------------------
  Challenge: 09-charCount
  Difficulty: Basic
  Prompt:
  - Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
  - The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
  - Upper and lower case characters should be counted separately.
  - Space characters should be count too.
  Examples:
  charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
  charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
  -----------------------------------------------------------------*/
  // Your solution for 09-charCount here:
  function charCount(string) {
    let object  = {}
    for (letter of string) {
      if (!object [letter]) object [letter] = 1
      else object [letter]++
    }
    return object ;
  }
  
  console.log(charCount('hello'))
  console.log(charCount('The Weekend Is Too Short'))
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 10-formatWithPadding
  Difficulty: Basic
  Prompt:
  - Write a function called formatWithPadding that accepts three arguments:
    - A numeric argument (an integer) representing the number to format.
    - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
    - Another numeric argument (an integer) representing the length to "pad" the returned string to.
  - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
  - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
  Examples:
  formatWithPadding(123, '0', 5); //=> "00123"
  formatWithPadding(42, '*', 10); //=> "********42"
  formatWithPadding(1234, '*', 3); //=> "1234"
  -----------------------------------------------------------------*/
  // Your solution for 10-formatWithPadding here:
  
  function formatWithPadding(num, char, numLength) {
    num = num + ""
    while (num.length < numLength) {
      num = char + num
    }
    return num;
  }

  console.log(formatWithPadding(123 , '0' , 5))
  console.log(formatWithPadding(42, '*', 10))
  console.log(formatWithPadding(1234, '*', 3))
  
  
  /*-----------------------------------------------------------------
  Challenge: 11-isPalindrome
  Difficulty: Intermediate
  Prompt:
  - Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
  - A palindrome is a word or phrase that are the same forward or backward.
  - Casing and spaces are not included when considering whether or not a string is a palindrome.
  - If the length of the string is 0 or 1, return true.
  Examples:
  isPalindrome('SEI Rocks'); //=> false
  isPalindrome('rotor'); //=> true
  isPalindrome('A nut for a jar of tuna'); //=> true
  isPalindrome(''); //=> true
  -----------------------------------------------------------------*/
  // Your solution for 11-isPalindrome here:
  
  function isPalindrome(string) {
    if (string.length === 0 || string.length === 1) return true
    string = string.replace(/\s/g, "").toLowerCase();
    if (string === string.split("").reverse().join("")) return true
    else return false
  }
  console.log(isPalindrome('SEI Roucks'))
  console.log(isPalindrome('rotor'))
  console.log(isPalindrome('A nut for a jar of tuna'))
  console.log(isPalindrome(''))
  
  
  
  /*-----------------------------------------------------------------
  Challenge: 12-hammingDistance
  Difficulty: Intermediate
  Prompt:
  In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
  - Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
  - The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
  - If the strings are not of the same length, the function should return NaN.
  Examples:
  hammingDistance('abc', 'abc'); //=> 0
  hammingDistance('a1c', 'a2c'); //=> 1
  hammingDistance('!!!!', '****'); //=> 4
  hammingDistance('abc', 'ab'); //=> NaN
  -----------------------------------------------------------------*/
  // Your solution for 12-hammingDistance here:
  
  function hammingDistance(ltr1, ltr2) {
    if (ltr1.length !== ltr2.length) return parseInt("a");
    let count = 0;
    arr1 = ltr1.split("");
    arr2 = ltr2.split("");
    arr3 = arr1.filter((char1, idx) => arr2[idx] !== char1);
    return arr3.length;
  }
  
  console.log(hammingDistance('abc', 'abc'))
  console.log(hammingDistance('a1c', 'a2c'))
  console.log(hammingDistance('!!!!', '****'))
  console.log(hammingDistance('abc', 'ab'))
  
  /*-----------------------------------------------------------------
  Challenge: 13-mumble
  Difficulty: Intermediate
  Prompt:
  - Write a function called mumble that accepts a single string argument.
  - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
  - Examples describe it best..
  Examples:
  mumble('X'); //=> 'X'
  mumble('abc'); //=> 'a-bb-ccc'
  mumble('121'); //=> '1-22-111'
  mumble('!A 2'); //=> '!-AA-   -2222'
  -----------------------------------------------------------------*/
  // Your solution for 13-mumble here:
  
  function mumble(ltr) {
    arr = ltr.split("")
    mumbledArr = arr.map((char, idx) => {
      let repeat = 0
      let mumbledChar = ""
      while (repeat <= idx) {
        mumbledChar += char
        repeat++
      }
      return mumbledChar
    });
    let mumbledltr = mumbledArr.join("-")
    return mumbledltr
  }
  console.log(mumble('x'))
  console.log(mumble('abc'))
  console.log(mumble('121'))
  console.log(mumble('!A 2'))
  
  
  /*-----------------------------------------------------------------
  Challenge: 14-fromPairs
  Difficulty: Intermediate
  Prompt:
  - Write a function named fromPairs that creates an object from an array containing nested arrays.
  - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
  - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
  Examples:
  fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
  fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
  -----------------------------------------------------------------*/
  // Your solution for 14-fromPairs here:
  
  function fromPairs(arr) {
    let object = {}
    for (nestedArr of arr) {
      let key = nestedArr[0]
      let value = nestedArr[1]
      object[`${key}`] = value;
    }
    return object
  }

  console.log(fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]))
  console.log(fromPairs([ ['age', 24], ['name', 'Sally'] ]))
  console.log(fromPairs([ ['age', 27], ['name', 'sam'] ]))