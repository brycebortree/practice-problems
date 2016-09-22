function largeDiff(arr){
  var small, tol;
  small = arr[0];

  for(var i = 1; i < arr.length; i++){
    if(arr[i] < small){
      small = arr[i];
    } else if (arr[i] > tol){
      tol = arr[i];
    }
  }

  return tol - small;
}

largeDiff([5, 8, 6, 1]);