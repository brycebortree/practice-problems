//first establish node using constructor function

function Node(data, next){
  this.data = data;
  this.next = next || null;
}

//then use LList class which has inserting, removing, and finding

function LList(){
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.display = display;
}

//to insert after existing, find after node

function find(item){
  var currNode = this.head;
  while(currNode.data != item){
    currNode = currNode.next;
  }
  return currNode;
}

//new node is inserted once "after" node is found

function insert(newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

//display elements of linked list

function display(){
  var currNode = this.head;
  while (!(currNode.next === null) &&
         !(currNode.next.data === "head")) {
    console.log(currNode.next.data);
    currNode = currNode.next;
  }
}

//find previous for removal, so we know what to skip

function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next === null) &&
          (currNode.next.data != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item){
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next;
  }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
console.log("\n"+"BREAK"+"\n");
cities.display();
