function removeDup(arr){
  var check = {},
      result = [];
      
  for(var i = 0; i < arr.length; i++){
    check[arr[i]] = true;
  }
  
  for (var keys in check){
    //parseInt bc otherwise string
    result.push(parseInt(keys));
  }
  
  return result;
}

removeDup([1, 1, 2, 3]);

// O of N