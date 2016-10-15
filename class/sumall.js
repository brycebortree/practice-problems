// for loop
function sumAll(arr) {
  var first = arr[0];
  var second = arr[1];
  
  var small = Math.min(first, second);
  var large = Math.max(first, second);
  
  var sum = large;
  
  for(var i = small; i < large; i++){
    sum = sum += i;
  }
  
  return sum;
}

sumAll([5, 10]);


// reduce


function sumAll(arr) {
  var first = arr[0];
  var second = arr[1];
  
  var small = Math.min(first, second);
  var large = Math.max(first, second);
  
  arr = [];
  
  for(var i = small; i <= large; i++){
    arr.push(i);
  }
  
  var res = arr.reduce(function(previousVal, currentVal, currentInd, arr){
    return previousVal + currentVal;
  });
  
  return res;
}

sumAll([5, 10]);
