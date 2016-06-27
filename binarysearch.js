var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(list, n) {
  list = list.sort();
  var end = list.length-1;
  var min = 0;
  var max = end;
  var elem;

  while (min != max) {
    if (guess > n) {
      max = guess - 1;
      console.log(max);
    } else if (guess < n) {
      min = guess + 1;
      console.log(min)
    } else {
      console.log("Numbers! I NEED NUMBERS!");
    }
  }
}
    

binarySearch(arr, 3);

//////SOLUTION FROM NOTES

function binarySearch(arr, search) {
  var min = 0;
  var max = arr.length - 1;
  var index;
  var elem;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    elem = arr[index];

    if (elem < search) {
      min = index + 1;
    }
    else if (elem > search) {
      max = index - 1;
    }
    else {
      return index;
    }
  }

  return -1;
}