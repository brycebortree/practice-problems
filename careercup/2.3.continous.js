function maxSum(arr){
  var max = 0,
    tempSum = 0;
    
  for(var i = 0; i < arr.length; i++){
    tempSum += arr[i];
    if(tempSum > max){
      max = tempSum;
    } 
    //didn't do this @ first... but good for neg numbers
    if(tempSum < 0){
      tempSum = 0;
    }
  }
  return max;
}

maxSum([2, -8, 3 -2, 4, -10]);