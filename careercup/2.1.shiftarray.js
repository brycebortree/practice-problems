function inOrder(arr){
  var aArr = [],
    bArr = [],
    j = 0,
    l = 0,
    k = 0,
    len = arr.length;
    
  for(var i = 0; i < len; i++){
    if(arr[i][0] === "a"){
      aArr.push(arr[i]);
    } else {
      bArr.push(arr[i]);
    }
  }
  
  arr = [];
  while(j < len){
    while(k < aArr.length){
      while (l < bArr.length){
        if(j % 2 !== 1){
          arr.push(aArr[k]);
          k++;
          j++;
        } else {
          arr.push(bArr[l]);
          l++;
          j++;
        }
      }
    }
  }
  return arr;
}

inOrder(["a1", "a2", "a3", "b1", "b2", "b3"]);