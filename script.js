//Set-1

//1.Write a program that takes an array of elements and counts the occurrences of each element using a Map.

function OccurrencesFinder(arr) {
  const occurrenceNewObject = {};
  arr.map((ele) => {
    if (occurrenceNewObject[ele]) {
      occurrenceNewObject[ele]++;
    } else {
      occurrenceNewObject[ele] = 1;
    }
  });
  return occurrenceNewObject;
}
const inputArray = [1, 2, 3, 2, 1, 4, 5, 4];
const occurrences = OccurrencesFinder(inputArray);
console.log(occurrences);

//2.Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.

function checkSubarrayWithSum(givenArr, targetSum) {
  const prefixSums = [0];
  let sum = 0;
  prefixSums.push(...givenArr.map((num) => (sum += num)));
  for (let i = 0; i < prefixSums.length; i++) {
    for (let j = i + 1; j < prefixSums.length; j++) {
      if (prefixSums[j] - prefixSums[i] === targetSum) {
        return true;
      }
    }
  }
  return false;
}
const givenArr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const resultSub = checkSubarrayWithSum(givenArr, targetSum);
console.log(resultSub);

//3.Write a program that takes an array of strings and groups anagrams together using a Map.

function anagramsFind(arr) {
  const anagramMap = new Map();
  arr.map((word) => {
    const sortedWord = word.split("").sort().join("");
    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }
  });
  return anagramMap;
}
function useOutput() {
  const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const result = anagramsFind(arr);
  console.log(result);
}
useOutput();

//4.Write a program that takes an array of strings and reverses each string in the array using the array methods.

function arrReversedString(arrOfString) {
  const reversedArray = arrOfString.map((str) =>
    str.split("").reverse().join("")
  );
  return reversedArray;
}
const arrInput = ["apple", "banana", "orange"];
const outputArray = arrReversedString(arrInput);
console.log(outputArray);

//5.Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods

function filterPerfectSquares(arr) {
  return arr.filter((num) => {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  });
}
const inputArr = [1, 2, 4, 7, 9, 16, 25];
const perfectSquares = filterPerfectSquares(inputArr);
console.log(perfectSquares);

//6.Write a program that takes two objects and merges them into a single object

function mergeObjects(obj1, obj2) {
  const mergedObject = Object.assign({}, obj1, obj2);
  return mergedObject;
}
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };
const merged = mergeObjects(obj1, obj2);
console.log(merged);

//7.Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().

function convertArrayToObject(arr) {
  const result = Object.fromEntries(arr.map((item) => [item.key, item.value]));
  return result;
}
const arr = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];
const convertedObject = convertArrayToObject(arr);
console.log(convertedObject);

//8.Write a program that takes a function with an array parameter and destructure the array inside the function.

function displayArray([first, second, ...rest]) {
  console.log(`First Element: ${first}`);
  console.log(`Second Element: ${second}`);
  console.log(`Rest Elements: ${rest}`);
}
const arrOfNum = [1, 2, 3, 4, 5];
displayArray(arrOfNum.slice(0, 2).concat(arrOfNum.slice(2)));

//9.Write a program that takes a nested object containing numeric values and calculates the sum of all values.

function calcNestedSum(obj) {
  const sumNested = (obj) =>
    Object.values(obj).reduce(
      (sum, value) =>
        sum + (typeof value === "number" ? value : sumNested(value)),
      0
    );
  const sum = sumNested(obj);
  return sum;
}
const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};
const sum = calcNestedSum(nestedObj);
console.log("Sum:", sum);

//10.Write a program that takes an object and counts the occurrences of each property
function countPropertyOccurrences(obj) {
  const output = Object.keys(obj).map((key) => ({ [key]: 1 }));
  return output;
}
const obj = { name: "John", age: 30, city: "New York", profession: "Engineer" };
const result = countPropertyOccurrences(obj);
console.log(result);
