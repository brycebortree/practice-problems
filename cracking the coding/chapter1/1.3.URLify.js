// Write a method to replace all spaces in a string with '%20'. 
//You may assume you're given the length of the string

function urlify(str, len){
  arr = [];
  for(var i = 0; i < len; i++){
    if(str[i] !== " "){
      arr.push(str[i]);
    }
    if(str[i] === " "){
      arr.push('%20');
    }
  }
  return arr.join('');
}


urlify("Mr John Smith  ", 13);

//first run: looked up join function for the '' part!!!
//didn't think of array until halfway through
//seems silly converting into and out of arrays?
//but this seems an almost standard way to do it
//modified length based off of question prompt