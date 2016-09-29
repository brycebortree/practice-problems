// define node object
function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

// show function
function show(){
  return this.data;
}

function BST(){
  this.root = null
  this.insert = insert;
  this.inOrder = inOrder;
}
// insert function
function insert(data){
  // check for a root node; if there isn't, the new one is
  var n = new Node(data, null, null);
  if(this.root === null){
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while(true){
      parent = current;
      if(data < current.data){
        current = current.left;
        if(current === null){
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        //checks until it finds the empty spot for it
        if(current = null){
          parent.right = n;
          break;
        }
      }
    }
  }
}

//three traversal functions
//inorder
//preorder
//postorder

function inOrder(node){
  if(node !== null){
    inOrder(node.left);
    putstr(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node){
  if(node !== null){
    //show comes first!
    putstr(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node){
  if(node !== null){
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + " ");
  }
}

// searches
// specific
// minimum
// maximum

function getMin(){
  var current = this.root;
  while(current.left !== null){
    current = current.left;
  }
  //RETURN
  return current.data;
}

function getMax(){
  current = this.root;
  while(current.right !== null){
    current = current.right;
  }
  return current.data;
}

function find(data){
  var current = this.root;
  while(current.data !== data){
    if(data < current.data){
       current = current.left;
    } else{
      current = current.right;
    }
    if(current === null) {
      return null;
    }
  }
  //return current
  return current;
}