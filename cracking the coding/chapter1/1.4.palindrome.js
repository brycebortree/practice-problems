//write a method to check if if a string is a permutation of a palindrome

function palperm(str) {
  //take string
  //assign count to letters in object

  //toLowerCase has a capitol L & C
  var lets = str.toLowerCase();

  console.log(lets);
  
  var check = {};
  var count = 0;

  //loop through and count letters in object
  for(var i = 0; i < lets.length; i++){
    //forgot to see if letter exists in check
    if(lets[i] !== " "){
      
      if(check[lets[i]]) {
      check[lets[i]]++;
    } else {
      //this was not a line I would have thought of on my own - kept trying to add when could have just left it at 1
      check[lets[i]] = 1;
      }
    }
  }
  console.log(check)
  //check number of letters
  //if length is odd, there can be only 1 of a letter once
  //if length is even, must be divisible by 2 for count of all
  
  //Didn't originally create a variable to hold the odd/even nums
  
  var num = 0;
  
  console.log("check[key]:", check[key] % 2 !== 0);

  for (var key in check){
      if(check[key] % 2 !== 0) {
        num += 1;
      }
    }
    console.log(num);
  return num < 2;
}

palperm("Tact Cooa"); //true
palperm("Tact Coa"); //true