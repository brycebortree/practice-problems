//indexOf way
function isSubstring(s1, s2){
  s1 = s1 + s1;
  
  if(s1.indexOf(s2) > -1){
    return true;
  }
    
  return false;
}

isSubstring("waterbottle", "erbottlewat");