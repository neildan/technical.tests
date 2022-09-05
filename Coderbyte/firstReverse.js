/*
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

Examples:
1. Input: "coderbyte"
Output: etybredoc
2. Input: "I Love Code"
Output: edoC evoL I
*/

function FirstReverse(str) {
  newArrayStr = [];
  for (i = 0; i <= str.length - 1; i++)
    newArrayStr[i] = str.split("")[str.length - 1 - i];
  return newArrayStr.join("");
}
console.log(FirstReverse("Daniel"));
