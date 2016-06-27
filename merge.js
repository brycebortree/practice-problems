var merge = function(arr1, arr2){
  var a1i = 0;
  var a2i = 0;
  arr3 = [];

  while(a1i < arr1.length && a2i < arr2.length) {
    if(arr1[a1i] < arr2[a2i]) {
      el = arr1.shift();
      arr3.push(el);
    } else {
      em = arr2.shift();
      arr3.push(em);
    }
  }
  console.log("arr3: ", arr3);
  return arr3;
}

// var merge_sort = function(a) {
  

//  if (a.length === 0 || a === undefined) {
//    return [];
//  } else if (a.length === 1){
//    return a;
//  } else {
//    var half = Math.floor(a.length / 2);
//    var first = a.splice(0,half);
//    var second = a; 
//    console.log("first: ", first);
//    console.log("second: ", second);
//    var a1 = merge_sort(first);
//    var a2 = merge_sort(second);
//    console.log("a1 is: ",a1);
//    console.log("a2 is: ",a2);
//  }
//  return merge(a1, a2);
// }

// ex = [10, 4, 7, 3, 8, 9, 2, 1, 6, 5, 0]
// merge_sort(ex);

// input arrays
second =  [ 10, 4, 7, 3 ]
first =  [ 9, 2, 1, 6 ]

merge(first, second)
// a3 is now [1, 2, 3, 4, 5, 6, 7, 8]