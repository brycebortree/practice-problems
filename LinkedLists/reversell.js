function Node(data, next){
  this.data = data;
  this.next = next;
}

function LList(){
  this.head = new Node(“head”);
  this.find = find;
  this.display = display;
  this.insert = insert;
  this.findPrevious = findPrevious;
//  this.remove = remove;
  this.findEnd = findEnd;
}

function find(item){
  current = this.head; 
  if(current.data !== item){
  current = current.next;
}
  return current;
}

function insert(data, item){
  var nodeInsert = new Node(data);
  //look back @ below
  var current = this.find(item);
  nodeInsert.next = current.next;
  current.next = nodeInsert;
}

function display(){
  var current = this.head;
  while(current.next !== null){
    console.log(current.next.data);
    //ITERATE FORWARD ******
    current = current.next;
  }
}

//check this function
function findPrevious(item){
  var current = this.head;
  while((current.data !== null)&&
    //BOTH*******
          current.next.data !== item)){
  current = current.next;
}
  return current;
}

/* function findEnd(){
  var current = this.head;
  while(current.next !== null){
    current = current.next;
}
  return current;
} */

function reverseLL(list){
  var current = list;
      var previous = null;
  while(current){
  // declare temp variable while.next;
    var next = current.next;
  //where the reversal actually happens
    current.next = previous;
  // saving previous to be used in next loop to turn around
    previous = current;
  //stepping forward
    current  = next;
}
  return previous;
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.advance(2);
cities.remove("Carlisle");
console.log("\n"+"BREAK"+"\n");
cities.display();
citites.reverseLL();