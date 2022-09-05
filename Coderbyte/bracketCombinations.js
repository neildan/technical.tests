/*
Bracket Combinations
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
*/

function bracketCombinations(num) {
  if (num == 0) return 1;
  let strOpen = "";
  let strClose = "";
  for (let index = 1; index < num; index++) {
    strOpen += "(";
    strClose += ")";
  }
  let data = recursivePermutations(strOpen + strClose);
  console.log(data.length);

  let permutationsData = data.filter((item, index) => {
    return data.indexOf(item) === index;
  });

  permutationsData = permutationsData.map((pd) => {
    return "(" + pd + ")";
  });
  return permutationsData.filter((p) => {
    let valid = true;
    let count = 0;
    p.split("").some((e) => {
      if (e == "(") count++;
      if (e == ")") count--;
      if (count < 0) {
        valid = false;
        return true;
      }
    });
    return valid;
  }).length;
}

function recursivePermutations(str) {
  if (str.length <= 2) return str.length == 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (a, c, i) =>
        a.concat(
          recursivePermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (v) => c + v
          )
        ),
      []
    );
}

console.log(bracketCombinations(3));
