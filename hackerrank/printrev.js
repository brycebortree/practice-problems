//simple for loop print

function printrev(n){
  var ans = '';
  for(var i = n; i > 0; i--){
    ans += i + " ";
  }
  return ans;
}

printrev(3);