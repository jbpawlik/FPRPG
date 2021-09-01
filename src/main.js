
// Problem #1
// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

// import { timers } from "jquery"

// It should be possible to create a new prefix function like this:

// const prefixSir = addPrefix("Sir");


// function addPrefix(prefix) {
//   return function (yourName) {
//     return `Good evening, ${prefix} ${yourName}.`
//   }
// }
// const prefixDuchess = addPrefix("Duchess")
// const prefixLord = addPrefix("Lord")
// console.log(prefixDuchess("Kim Kardashian"))
// console.log(prefixLord("Featherbottom"))

// Problem #2
// Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:

// const lionSound = soundMaker("roar");
// const mouseSound = soundMaker("squeak");

// function soundMaker(sound) {
//   return function (animal) {
//     return `The ${animal} says ${sound}`
//   }
// }
// const lionSound = soundMaker('roar');
// const mouseSound = soundMaker('squeak');

// Problem #3 (Harder)
// // Use closures to create multiple functions for adding both a prefix and a suffix to a name. For example, it should be possible to do the following:

// const misterJunior = nameEnhancer("Mister")("Junior");
// const duchessThird = nameEnhancer("Duchess")("The Third");

// function nameEnhancer(prefix) {
//   return function (suffix) {
//     return function (name) {
//       return `Good night, ${prefix} ${name} ${suffix}. May you're dreams be sweet and your night be cool`
//     }
//   }
// }
// const misterJunior = nameEnhancer("Mister")("Junior")
// console.log(misterJunior("Bobby Bobopolis"))

// Problem #4 (Harder)
// Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:

// const addTwoMultiplyByThree = addaMult(2)(3);
// const addFiveMultiplyByNine = addaMult(5)(9);

// function addaMult(numToAdd) {
//   return function(numToMultiply) {
//     return function(startingNum) {
//       return (startingNum + numToAdd) * numToMultiply
//     }
//   }
// }

// const addTwoMultiplyByThree = addaMult(2)(3);

// console.log(addTwoMultiplyByThree(50))
// console.log(addTwoMultiplyByThree(20))
// console.log(addTwoMultiplyByThree(4))

// function nonCurry(num1, num2, num3) {
//   return (num1 + num2) * num3
// }

// console.log(nonCurry(4, 2, 3))


// Practice with Recursion
// Alternate problem #1 and #2 with your pair.

// Problem #1
// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

// function reverseThatSentence(sentence)  {
//   if (sentence.length === 0) {
//     return "";
//   } else {
//     if (typeof sentence === "string") {
//       let sentenceArray = sentence.split(" ")
//       let element = sentenceArray.shift()
//       return reverseThatSentence(sentenceArray) + element + " ";
//     } else {
//       let element = sentence.shift()
//       return reverseThatSentence(sentence) + element + " ";
//     }
//   }
// }

// console.log(reverseThatSentence("Catty and Batty love Betty and Patty"))

// Problem #2
// Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:
// function redGreenRefactor(statement) {
//   return function (num) {
//     if (num === 0) {
//       console.log('Hello')
//       return statement;
//     } else {
//         statement = statement.concat('red green refactor ')
//         return redGreenRefactor(statement)(num - 1)
//     }
//   }
// }

// console.log(redGreenRefactor("this string get's greened.")(5))

// Practice with Composition
// Alternate problem #1 and #2 with your pair. Then alternate problem #3 and #4. If someone gets stuck, you may help your pair whiteboard a problem or brainstorm a solution.

// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

// const canPaint = function(color) {
//   const obj = {
//     paints: function () {
//       return `Paints ${color}.`
//     }
//   }
//   return obj
// }

// const terry = canPaint("Green")
// const ben = canPaint("Orange")
// const kyle = canPaint("Fuschia")

// console.log(terry.paints())
// console.log(ben.paints())
// console.log(kyle.paints())

// Problem #2
// Compose a function called sound(). You should be able to add the following functionality to the objects listed:

// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

// const makeNoise = function(noisemaker) {
//   const obj = {
//     sound: function(noise) {
//       return `The ${noisemaker} goes '${noise}'`;
//     }
//   }
//   return obj
// }

// const faucet = makeNoise('faucet')
// const oldCar = makeNoise('old car')
// const sleepyBear = makeNoise('sleepy bear')

// console.log(faucet.sound('Drip drip drip'))
// console.log(oldCar.sound('Pfffft... ch ch ch ch... keh! Keh!'))
// console.log(sleepyBear.sound('Wmwmwmwmwmwm... mwmwmwmwmwm'))


// Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots. A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

// const canThrow = function(battlebot) {
//   return function (speed) {
//     return function (distance) {
//       const obj = {
//         throws: function () {
//           return `${battlebot}, a battlebot, throws the spear ${speed} miles per hour and it went ${distance} meters. Yikes.`
//         }
//       }
//       return obj
//     }
//   }
// }

// const destructo = canThrow("Destructo")(100)(500)
// const flipper = canThrow("flipper")
// console.log(destructo.throws())
// console.log(flipper(50)(100000).throws())

// Problem #4
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

// const dance = function(dancer) {
//   const obj = {
//     tango: function() {
//       return `The ${dancer} does the tango.`
//     },
//     samba: function() {
//       return `The ${dancer} does the samba.`
//     },
//     breakdance: function() {
//       return `The ${dancer} busts a move.`
//     }
//   }
//   return obj;
// }

// const dancer = dance('dancer');

// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.

// All integers greater than 28123 can be written as the sum of two abundant numbers.

// However, this upper limit (28123) cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

// upper limit (28123)

// find all the numbers that are not equal to the sum of two abundant numbers

// 1. find the abundant numbers
//   - an abundant number is a number thats proper divisors are greater than the sum of the number


const abundantNumber = function(number) {
  let divisorArray = []
  loopNum = number -1
  for (let i = 1; i <= loopNum; i = i + 1) {
    if (number % i === 0) {
      divisorArray.push(i)
    }
  }
  compareNum = divisorArray.reduce((a, b) => a + b, 0)
  if (compareNum > number) {
    return number
  }
}

const abundantAddition = function(numArray) {
  i = 0
  abundantSumArray = []
  while (i < numArray.length-1 ) {
    for (n = 0; n <= numArray.length -1; n++) {
      sum = numArray[i] + numArray[n]
    if (abundantSumArray.includes(sum) === false) {
      abundantSumArray.push(sum)
    }
    }
    i++
  }
  return abundantSumArray
}

const nonAbundantSumNums = function(abundantArray) {
  return function (number) {
    let numArray = [...Array(number + 1).keys()]
    numArray.shift()
    abundantArray.forEach (function(number){
        numArray = numArray.filter(e => e != number)
    })
    return numArray
  }
}

const rangeAbundant = function(number) {
  let numArray = [...Array(number + 1).keys()]
  numArray.shift()
  let abundantArray = []
  numArray.forEach (function(integer){
    if (typeof abundantNumber(integer) === "number") {
    abundantArray.push(integer)
    }
  })
  abundantSumArray = abundantAddition(abundantArray)
  return nonAbundantSumNums(abundantSumArray)(number)
}

console.log(rangeAbundant(100))