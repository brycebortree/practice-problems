var flatten = function(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    arr1 = arr.push(arr[i]);
    newArr = arr.concat(arr1);
  }

  console.log(arr1);
  console.log(arr);
  console.log(newArr);
}

var myArr = [1, 2, [3, 4], [5, 6], 7];

flatten(myArr);

//take in array
//iterate through array, pushing elements out into newArr
//iterating through arrays w/i arrays
//push elements in w/i arrays out into newArr
//return newArr