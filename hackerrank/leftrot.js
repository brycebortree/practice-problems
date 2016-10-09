function leftRotate(nums, rot){
  var arr = [];
  
  //creates array
  for(var i = 1; i < nums + 1; i++){
    arr.push(i);
  }
  
  //removes from beg adds to end
  for(var j = 0; j < rot; j++){
    var save = arr.shift();
    arr.push(save);
  }
  
  return arr;
}

leftRotate(5, 4);