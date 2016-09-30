//RETURN rather than console.log
function Stack(){
  //items initialized without a this
  var items = [];

  this.push = function(element){
    items.push(element);
  }

  //pop doesn't take in element as argument
  this.pop = function(){
    return items.pop();
  }

  this.peek = function(){
    return items[items.length-1];
  }

  this.isEmpty = function(){
    return items.length === 0;
  }

  this.size = function(){
    return items.length;
  }

  this.clear = function(){
    items = [];
  }

  //put items toString();
  this.print = function(){
    console.log(items.toString());
  }
}

var stack = new Stack();
//only call on new instance, not capital
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
stack.push(11);


console.log(stack.print());

stack.pop();
stack.pop();

console.log(stack.print());