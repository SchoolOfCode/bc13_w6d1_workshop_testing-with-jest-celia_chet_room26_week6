import { test, expect } from "@jest/globals";

import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test('test if 5 * 2 + 1 returns 11', () => {
    const actual = doubleAndAddOne(5)
    const expected = 11
    expect(actual).toBe(expected)
} )

let myArray = [
  1, 2 , 3, 4, 5, 6, 7
]

test('if item added to array', () => {
    let actual = addItemToArray(myArray, 8)
    let lastItemIndex = actual.length - 1
    expect(actual[lastItemIndex]).toBe(8)

  //   let lastItemIndex = actual.length-1
  //  let thingy = actual[lastItemIndex]
})

