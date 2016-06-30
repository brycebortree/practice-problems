function oneAway(s1, s2){
    var check = {};
    var count = 0;

    for(var i = 0; i < s1.length; i++){
      if(check[s1[i]]){
        check[s1[i]] += 1;
      } else {
        check[s1[i]] = 1;
      }
    }
    
    for(var j = 0; j < s2.length; j++){
    //used the wrong variable
      if(check[s2[j]]) {
        check[s2[j]] -= 1;
      }
    }

  for(var key in check) {
    if(check[key] !== 0) count++;
  }
  console.log("count:", count);
  return count < 2;
}

oneAway("pale", "ple"); //true
oneAway("pales", "pale"); //true
oneAway("pale", "bale"); //true
oneAway("pale", "bake"); //false

//returns correctly but not sure if correct