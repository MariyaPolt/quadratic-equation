module.exports = function solveEquation(equation) {
  let substringArray = equation.split(" ");
  let a = +substringArray[0];
  let b = +(substringArray[3] + substringArray[4]);
  let c = +(substringArray[7] + substringArray[8]);

  resultArray = [];
  resultArray.push( Math.round( (-b + Math.sqrt(b*b - 4*a*c)) / (2 * a) ) );
  resultArray.push( Math.round( (-b - Math.sqrt(b*b - 4*a*c)) / (2 * a) ) );
  resultArray.sort( (a, b) => a - b; );

  return resultArray;
}
