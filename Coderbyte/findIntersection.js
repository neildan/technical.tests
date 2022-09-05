/*
Buscar intersección

Haga que la función FindIntersection(strArr) lea la matriz de cadenas almacenadas en strArr que contendrá 2
elementos: el primer elemento representará una lista de números separados por comas ordenados en orden ascendente,
el segundo elemento representará una segunda lista de números separados por comas números (también ordenados).

Su objetivo es devolver una cadena separada por comas que contenga los números que aparecen en los elementos de strArr en orden.
Si no hay intersección, devuelve la cadena: ''.

Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function FindIntersection(strArr) {
  let one = strArr[0].split(", ");
  let two = strArr[1].split(", ");
  one = one.filter((o) => o == two.find((t) => t == o));
  if (one.length == 0) return false;
  return one.join(",");
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
