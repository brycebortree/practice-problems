// all functions are this.FUNCTIONNAME() NOT function //FUNCTIONNAME()
function Queue(){
  var items = [];

  //items.push NOT this.push
  this.enqueue(element){
    items.push(element);
  }

  this.dequeue(){
    return items.shift();
  }

  //items length NOT Queue.length
  this.front(){
    return items[0];
  }

  this.isEmpty(){
    return items.length === 0;
  }

  this.clear(){
    items = [];
  }

  this.size(){
    return items.length;
  }

  //print is console.log
  this.print(){
    console.log(items);
  }
}

var queue = new Queue();
queue.enqueue(7);
queue.enqueue("hi");
queue.enqueue("bye");

queue.print();

queue.dequeue();

queue.print();
