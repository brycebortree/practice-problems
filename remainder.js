//takes in two numbers to divide
//returns remainder

function returnRemainder(n, d){
  if(n === d){
    return 0;
  }
  
  while(n > d){
        n = n - d;
      }
      
  return n;
}

// returnRemainder(10, 4);
// returnRemainder(4, 4);
// returnRemainder(2, 4);
returnRemainder()