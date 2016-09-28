function Node(data, next){
  this.data = data;
  this.next = null;
}

function LinkedList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item){
  //remember THIS.head
  var currNode = thishead;
  while(currNode.data != item){
    currNode = currNode.next;
  }
  return currNode;
}

//REMEMBER item to know where to store
function insert(newElement, item){
  var newNode = new Node(newElement);
  //REMEMBER current = this.find - that's why we need that function
  var current = this.find(item);
  //REMEMBER tie newnode into current's next
  newNode.next = current.next;
  current.next = newNode;
}

function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next === null) &&
          currNode.next.data != item)){
    currNode = currNode.next;
  }
  return currNode;
}

//  REMEBER this whole function, dork
function remove(item){
  //  REMEMBER findPrevious function
  var prevNode = this.findPrevious(item);
  if(prevNode.next !== null){
    prevNode.next = prevNode.next.next;
  }
}

function display(){
  //  REMEMBER this.head
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log(currNode.next.data);
    currNode = currNode.next;
  }
}