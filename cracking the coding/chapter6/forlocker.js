function lockeropen(num){
  var string = createString(num),
      newString = '';

  for(var i = 0; i < string.length; i++){
    // for(var j = 0; j < string.length; j++){
      if(string[i] === 'C'){
        newString += 'O';
      } else {
        newString += 'C';
      // }
    }
  }

  return newString;
}

//minihelper function

function createString(num){
  var intStr = '';

  for(var i = 0; i < num; i++){
    intStr += 'C';
  }

  return intStr;
}

lockeropen(5);
// lockeropen(10);
// lockeropen(100);
