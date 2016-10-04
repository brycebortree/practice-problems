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

//o of n way
LinkedList.prototype.kthLast = function(num){
  if(!this.head) return null;

  var curr = this.head,
      count = 1,
      countMinusNum;

  while(curr.next){
    curr = curr.next;
    count++;
  }

  countMinusNum = count - num;
  curr = this.head;

  while(countMinusNum > 0){
    curr = curr.next;
    countMinusNum--;
  }
  return curr;
}

//also a for loop count up method

LinkedList.prototype.kthLast2 = function(num){
  if(!this.head) return null;

  var curr = this.head,
      kthNode = this.head;

  for(var i = 0; i < k; i++){
    if(!kthNode) return null;
    kthNode = kthNode.next;
  }

  while(kthNode){
    curr = curr.next;
    kthNode = kthNode.next;
  }

  return curr;
}

var books = new LinkedList();
books.insert("Sorcerer's Stone");
books.insert("Chamber of Secrets");
books.insert("Prisoner of Azkaban");
books.insert("Goblet of Fire");
books.insert("Order of the Phoenix");
books.insert("Half-Blood Prince");
books.insert("Deathly Hallows");
books.find("Sorcerer's Stone");
books.kthLast2(3);