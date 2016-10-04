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

//how do you put a node into a function? 
LinkedList.prototype.deleteMid = function(mid){
  if(!this.head) return;

  mid.data = mid.next.data;
  mid.next = mid.next.next;
  return true;

}

var books = new LinkedList();
books.insert("Sorcerer's Stone");
books.insert("Chamber of Secrets");
books.insert("Prisoner of Azkaban");
// books.insert("Goblet of Fire");
// books.insert("Order of the Phoenix");
// books.insert("Half-Blood Prince");
// books.insert("Deathly Hallows");
// books.find("Sorcerer's Stone");
books.deleteMid("Chamber of Secrets");
books.find("Sorcerer's Stone");