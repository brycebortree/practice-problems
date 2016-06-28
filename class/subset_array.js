//my answer
function sub(a1, a2) {
  var pres = {};
  for (var i = 0; i < a2.length; i++){
    for(var k = 0; k < a1.length; k++) {
      if(i === k) {
        pres.push(1);
        break;
      }
    }
  }
  if (pres.length === a2.length) {
    return true 
  } else {
    return false;
  }
}

//Todd's optimized answer
function sub (arr1, arr2) {
  var elements = {};
  for (var i = 0; i < arr1.length; i++){
    elements[arr1[i]] = true;
  }

  for (var i = j; i < arr2.length; j++){
    if(!elements[arr1[i]]){
      return false;
    }
  }
  return true;
}