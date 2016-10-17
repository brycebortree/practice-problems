// s1: [6,4,2,8,9,6,2,2]
// s2: [4,2,9]
// output: True  

function checkOrder(arr1, arr2){
  var previous = 0, 
      current = 0;

  for(var i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) > -1){
      previous = current;
      current = arr1.indexOf(arr2[i]);
    } 
    if(previous >= current){
      return false;
    }
  }
  return true;
}

checkOrder([6,4,2,8,9,6,2,2], [4,6,9]);