function twos(n){
  var arr = [];
  var count = 0;

  for(var i = 0; i < n; i++){
    arr.push(i);
  }

  var str = arr.join();
  console.log("str", str);


  for(var j = 0; j < str.length; j++){
    if(str[j]===2){
      count++;
    }
  }

  return count;
}

twos(35);