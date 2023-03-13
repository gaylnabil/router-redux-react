/*Implement a function that takes a list of strings as input and returns a new list where each string has been reversed.*/

/// ["abc", "xyz"] => ["cba", "zyx"]

const reverseStr = (str) => {
  return str === "" ? "" : reverseStr(str.substr(1)) + str.charAt(0);
};

const arr = ["abc", "xyz"];

const results = arr.map((str) => {
  return reverseStr(str);
});
console.log(results);
