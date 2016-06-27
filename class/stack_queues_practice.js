// # Stutter
// Write a method stutter that takes a stack of integers as a parameter and replaces every value in the stack with two occurrences of that value. For example, suppose the stack stores these values:

// bottom [3, 7, 1, 14, 9] top
// Then the stack should store these values after the method terminates:

// bottom [3, 3, 7, 7, 1, 1, 14, 14, 9, 9] top
// Notice that you must preserve the original order. In the original list the 9 was at the top and would have been popped first. In the new stack the two 9s would be the first values popped from the stack. You may use a single queue as auxiliary storage to solve this problem.

// working solution
var stutter = function(stack){
  var newStack = [];
  
  while (stack.length !== 0) {
    var item = stack.pop();
    newStack.push(item);
    newStack.push(item);
  }
  
  while(newStack.length > 0){
  var otherItem = newStack.pop();
  stack.push(otherItem);
    }

  return stack;
  
}

var ex = [3, 7, 1, 14, 9];

stutter(ex);


// # Expunge
// Write a method expunge that accepts a stack of integers as a parameter and makes sure that the stack's elements are in non-decreasing order from top to bottom, by removing from the stack any element that is smaller than any element(s) on top of it. For example, suppose a variable s stores the following elements:

// bottom [4, 20, 15, 15, 8, 5, 7, 12, 3, 10, 5, 0] top
// The element values 3, 7, 5, 8, and 4 should be removed because each has an element above it with a larger value. So the call of expunge(s); should change the stack to store the following elements in this order:

// bottom [20, 15, 15, 12, 10, 5, 0] top
// Notice that now the elements are in non-decreasing order from top to bottom. If the stack is empty or has just one element, nothing changes. You may assume that the stack passed is not null.

// (Hint: An element e that should be removed is one that is smaller than some element above e. But since the elements above e are in sorted order, you may not need to examine all elements above e in order to know whether to remove e.)

// Obey the following restrictions in your solution:

// You may use one queue or stack (but not both) as auxiliary storage. You may not use other structures (arrays, lists, etc.), but you can have as many simple variables as you like.
// Use stacks/queues in stack/queue-like ways only. Do not call index-based methods such as get, search, or set (or for-each) on a stack/queue. You may call only add, remove, push, pop, peek, isEmpty, and size.

// not working yet solution
var expunge = function(stack){
  newStack = [];
  if (stack.length <= 1) {
    return stack;
  }
  
  while(stack.length !== 0) {
    for(var i = 0; i < stack.length; i++){
      if(stack[i] < stack[i + 1]) {
        stack.pop();  
      } else {
        var e = stack.pop();
        newStack.push(stack[i]);
      }
    }
  }
  
  return newStack;
}

var ex = [4, 20, 15, 15, 8, 5, 7, 12, 3, 10, 5, 0];

expunge(ex);


// # Shift
// Write a method shift that takes a stack of integers and an integer n as parameters and that shifts n values from the bottom of the stack to the top of the stack. For example, if a variable called s stores the following sequence of values:

// bottom [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] top 
// If we make the call shift(s, 6); the method shifts the six values at the bottom of the stack to the top of the stack and leaves the other values in the same order producing:

// bottom [7, 8, 9, 10, 6, 5, 4, 3, 2, 1] top 
// Notice that the value that was at the bottom of the stack is now at the top, the value that was second from the bottom is now second from the top, the value that was third from the bottom is now third from the top, and so on, and that the four values not involved in the shift are now at the bottom of the stack in their original order. If s had stored these values instead:

// bottom [7, 23, -7, 0, 22, -8, 4, 5] top 
// If we make the following call: shift(s, 3); then s should store these values after the call:

// bottom [0, 22, -8, 4, 5, -7, 23, 7] top 
// You are to use one queue as auxiliary storage to solve this problem. You may assume that the parameter n is >= 0 and not larger than the number of elements in the stack.
