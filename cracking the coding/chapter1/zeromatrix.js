//many for looops way

function zero(arr){
  var temp = [];
  
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i][j] === 0){
        temp.push([i]);
        temp.push([j]);
      } 
    }
  }
  
  for(var m = 0; m < arr[temp[0]].length; m++){
      arr[temp[0]][m] = 0;
  }

  
  for(var n = 0; n < arr.length; n++){
    arr[n][temp[1]] = 0;
  }
  
  return arr;
}

zero([
  [4, 1, 2],
  [3, 0, 5],
  [6, 7, 8]
  ])

