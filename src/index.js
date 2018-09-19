module.exports = function solveEquation(equation) {
  var substringArray = equation.split(" ");
  var a = +substringArray[0];
  var b = +(substringArray[3] + substringArray[4]);
  var c = +(substringArray[7] + substringArray[8]);

  resultArray = [];
  resultArray.push( Math.round( (-b + Math.sqrt(b*b - 4*a*c)) / (2 * a) ) );
  resultArray.push( Math.round( (-b - Math.sqrt(b*b - 4*a*c)) / (2 * a) ) );
  resultArray.sort( function(a, b) { return a - b; });

  return resultArray;
}
