function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var newString = "";
  var count = 0;
  
  if(vowels.indexOf(str[0]) !== -1){
    newString = str + "way";
    return newString;
  } else {
    for(var i = 0; i < str.length; i++){
      if(vowels.indexOf(str[i]) !== -1){
        break;
      } 
    count++;
    }

    str = str.split("");
    
    var beg = [];
    for(var j = 0; j < count; j++){
      beg.push(str[j]);
    }
    beg = beg.join("");
    
    var temp = beg + "ay";
    str = str.join("");
    newString = str.substr(count, str.length) + temp;
    return newString;
  } 
}

translatePigLatin("glove");
