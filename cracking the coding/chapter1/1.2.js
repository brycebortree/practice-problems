//given two strings, see if one is a permutation of the other

//pseudocode
//for loop through first string
//create object containing letters
//for loop through second string
//check if true for all letters

function subset(s1, s2) {
  var lets = {};
  for(var i = 0; i < s1.length; i++){
    if(!lets[s1[i]]) {
      lets[s1[i]] = true;
    }
  }
  console.log("lets: ", lets);

  for(var j = 0; j < s2.length; j++){
    console.log("j: ", s2[j]);
    //really struggled with this lower line:
    //only return FALSE if the letter ISN'T in the object
    if(!lets[s2[j]]){
      return false;
    }
  }
  return true;
}

subset("hahahaha", "ha");

//OK REALIZED I DIDN'T KNOW WHAT PERMUTATIONS WERE
//May have created subset algorithm instead???

function perm(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  
}
