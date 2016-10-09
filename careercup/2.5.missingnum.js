function missing(arr){
  var n = arr.length - 1;
  
  var arrSum = arr.reduce(function(x, y){
    return x + y;
  }, 0);
  
  //checking for the value AT arr.length -1 
  var expectedSum = arr[n] * (arr[n] + 1) / 2;

  return expectedSum - arrSum;
}

missing([1, 2, 3, 4, 6]);

