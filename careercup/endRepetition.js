
function endRep(longer, search){
  if(longer.substr(longer.length - longer.length, longer.length) === search){
    return true;
  }
  return false;  
}

endRep("Open sesame", "same");

//one line way
// function confendRepirmEnding(str, target){
//   return str.substr(-target.length) === target; 
// }