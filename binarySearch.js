function binarySearch(arr, num){
  var left = 0;
  var right = arr.length - 1;

  while(left <= right){
    var middle = Math.floor((left + right) / 2);
    if(arr[middle] < num){
      left = middle + 1;
    } else if(num < arr[middle]){
      right = middle - 1;
    } else {
      return "element is at index " + middle;
    }
  }
  return "exact element not found";
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6.5);