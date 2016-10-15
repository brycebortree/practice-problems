
function myReplace(str, before, after) {
  newStr = [];
  str = str.split(" ");
  
  if(before[0].toUpperCase() === before[0]){
    console.log("BIG BOI");
    after = after[0].toUpperCase() + after.slice(1,after.length);
  }
  
  for(var i = 0; i < str.length; i++){
    if(str[i] === before){
      newStr.push(after);
    } else{
    newStr.push(str[i]);
    }
  }
  
  return newStr.join(" ");

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");