//double for loop way
function rotateMatrix(arr) {
  var newMatrix = [],
    len = arr.length;
    
  for (let i = 0; i < len; i++) {
    var tempArr = [];
    for (let j = 0; j < len; j++) {
      tempArr.unshift(arr[j][len - 1 - i]);
    }
    newMatrix.unshift(tempArr);
  }
  return newMatrix;
}
console.log(rotateMatrix(
  [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]));

