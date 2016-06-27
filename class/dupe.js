//find dupes in an array
//[1, 2, "foo", "bar", "foo"] => "foo"
//[1, 2, 3, 9, 2] => 2

//n^2
function dupe(arr) {
  for(var i = 0; i < arr.length; i++) {
    var comp = arr[i];
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j]===comp){
        return comp;
      }
    }
  }
  return null;
}

//n way

function dupes(arr){
  var found={};
  for (var i = 0; i < arr.length; i++) {
    if (!found[arr[i]] = true) {
      found[arr[i]] = true
    } else {
      return arr[i];
    }
  }
  return null;
}