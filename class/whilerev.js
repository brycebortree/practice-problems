function rev(arr){
  var a = 0;
  var b = arr.length - 1;
  while(a < b){
    var c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    a++;
    b--;
  }
  return arr;
}

rev([1,2,3,4,5])