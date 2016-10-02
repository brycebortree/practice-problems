function Node(data, next){
  this.data = data;
  this.next = next;
}

function LList(){
  this.head = new Node("head", null);
  this.add = add;
  this.find = find;
  this.display = display;
}

//super quirky
function add(data){
  var node = new Node(data);
  
  var current = this.head;
  if(current.next){
    current = current.next;
  }
  current.next = node;
}

function find(data){
  var current = this.head;
  
  if(current.data !== data){
    current = current.next;
  }
  console.log("found: ", current);
}

function display(){
  var current = this.head;
  if(current.next){
    console.log(current.next);
  }
}

var books = new LList();
books.add("Men");
books.add("Whoo");
books.add("Aloha");
books.find("Men");
books.display();