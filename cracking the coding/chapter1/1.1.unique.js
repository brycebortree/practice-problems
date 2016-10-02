//is unique
//write an algorithm that checks if a string has all unique characters

// forgot the curly braces && didn't do str[j] @ first

function unique(str) {
  for(var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if(str[j]===str[i]){
        return false;
      }
    }
  }
}

unique("The brown dog");

//complexity: o of n squared

//is unique
//write an algorithm that checks if a string has all unique characters

// function unique(str) {
//   //deleted unnecessary turn to array
//   check = {};

//   for(var i = 0; i < str.length; i++){
//     //originally: str[i] != check[i]
//     if (check[str[i]] !== null){
//       //forgot how to assign elements
//       check[str[i]] = 1;
//       return false;
//     } else {
//       check[str[i]] = 0;
//     }
//   }
//   return true;
// }

// unique("The brown dog");

//got help!
//complexity: o of n

