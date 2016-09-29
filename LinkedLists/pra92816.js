// start with one node

function Node(data, next){
  this.data = data;
  this.next = null;
}

// define list with all its functions
function LList(){
  this.head = new Node("head");
  this.insert = insert;
  this.display = display;
  this.find = find;
  this.remove = remove;
  this.findPrevious = findPrevious;
  
}

function find(item){
  var currNode = this.head;
  while(currNode.data != item){
    currNode = currNode.next;      
  }
  //REMEMBER TO RETURN
  return currNode;
}

//LOOK OVER THIS
function insert(newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}


function display(){
  //REMEMBER this.head
  var currNode = this.head;
  while(currNode.next !== null){
    console.log(currNode.next.data);
    //REMEMBER TO STEP FORWARD
    currNode = currNode.next;
  }
}


function findPrevious(item){
  var currNode = this.head;
  while((currNode.next !== null)&&
    //REMEMBER SECOND WHILE
        (currNode.next.data !== item)){
    currNode = currNode.next;
  }
  //REMEMBER TO RETURN CURRNODE
  return currNode;
}

function remove(item){
  var prevNode = findPrevious(item);
  //REMEMBER IF
  if(prevNode.next !== null){
    prevNode.next = prevNode.next.next;
  }
}


var books = new LList();
books.insert("Girls", "head");
books.insert("Pride", "Girls");
books.insert("Zombies", "Pride");
books.display();


