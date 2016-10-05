function Node(data,next){
  this.data = data;
  this.next = next;
}

function LinkedList(){
  this.head = null;
}

//can add to the functional object as a prototype bc Javascript magic
LinkedList.prototype.insert = function(data){
  if(!this.head){

    var newHead = new Node(data, null);
    this.head = newHead;

  } else {

    var newNode = new Node(data,null);
    var current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }
}

//cases: head, midlist
LinkedList.prototype.remove = function(data){
  if(!this.head) return;

  if(data === this.head.data){
    this.head = this.head.next;
    //console.log("removed " + data);
    return;
  }  

  var current = this.head;

  if(current.next.data !== data){
    //end of list
    if(current.next === null){
      return;
    }
    current = current.next;
  }
  current.next = current.next.next;
  return;
}

//return entire node
LinkedList.prototype.find = function(data){
  if(!this.head) return null;

  var current = this.head;

  while(current.data !== data){
    if(!current.next){
      return null;
    }
    current = current.next;
  }
  return current;
}

LinkedList.prototype.addition = function(list1, list2){
  var ans = new LinkedList(),
      carry,
      num;

  


  

}

var first = new LinkedList();
first.insert(1);
first.insert(3);

var second = new LinkedList();
second.insert(2);
second.insert(4);

addition(first, second);