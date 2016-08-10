function fib(num){
  if(num < 2){
    return 1;
  } else {
  return fib(num-2) + fib(num-1);
  }
}
fib(7)