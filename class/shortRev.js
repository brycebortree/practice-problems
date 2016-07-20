//reverse a string without iterating over the whole length

function shortRev(str){
  var beg = [];
  var end = [];
  var half = str.length/2;

  for(var i = 0; i < half; i++){
    beg.push(str[str.length - i]);
    end.unshift(str[0 + i]);
  }
  arr = beg + end;
  var newStr = arr.toString();
  newStr = newStr.split(',').join('');
  return newStr;
}

shortRev("bryce");
shortRev("bortree");

//super easy way with reverse
var revstr = mystr.split('').reverse().join('');


//fancier
function reverse(str) {
  var arr = str.split("");
  var length = arr.length;
  var half = length / 2;
  for (var i = 0; i < half; i++) {
    var temp = chars[i];
    var rev = length - i - 1;
    chars[i] = chars[rev];
    chars[rev] = temp;
  }
  return chars.join("");
}

console.log(reverse("abcd"));
console.log(reverse("abcde"));