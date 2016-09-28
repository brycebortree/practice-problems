//first establish node using constructor function

function Node(data, next){
  this.data = data;
  this.next = null;
  this.previous = null;
}

//then use LList class which has inserting, removing, and finding

function LList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.display = display;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
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
  newNode.previous = current;
  current.next = newNode;
}

//display elements of linked list

function display(){
  var currNode = this.head;
  while (!(currNode.next === null)) {
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
  var currNode = this.find(item);
  if(!(currNode.next === null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function findLast(){
  var currNode = this.head;
  while(!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while(!(currNode.previous == null)){
    console.log(currNode.data);
    currNode = currNode.previous;
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
