function thisSum(arr, num){
  var ans = [];
  
  if(arr.length <= 1){
    return arr;
  }
  
  for(var i = 0; i < arr.length; i++){
    for(var j = i; j < arr.length; j++){
      if(num === (arr[i] + arr[j])){
        ans.push(arr[i] +" & "+ arr[j]);
      }
    }
  }
  return ans;
}

thisSum([0, 3, 4, 2, 5, 7], 7); 

