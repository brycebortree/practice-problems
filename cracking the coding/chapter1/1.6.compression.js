// Implement a method to perform basic  compression using the counts of 
// repeated characters. If the "compressed" string is longer than the original string, 
// your method should return the original string. Assume upper and lowercase letters only.

function comp(str){
  // var lets = {};
  var res = '';
  //didn't start count @ 1
  var count = 1;

  for(var i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      //didn't start count @ 1
      count = 1;
    }
  }

  if(res.length < str.length){
    return res;
  } else {
    return str;
  }
  
}

comp("aabcccccaaa"); //"a2b1c5a3"

