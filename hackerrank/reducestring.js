function reduceString(str){
  var finStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      str = str.slice(0, acc.length - 1);
    } else {
      finStr += str[i];
    }
  }
  return finStr;
}

//iterate through and check for doubles
//return if no doubles