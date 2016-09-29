// define node object
function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  //count occurences
  this.count = 1;
}

// show function
function show(){
  return this.data;
}

function BST(){
  this.root = null
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  //add update
  this.update = update;
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

//remove a node
function remove(data){
  root = removeNode(this.root, data);
}

//removeNode
function removeNode(node, data){
  if(node === null){
    return null;
  }
  if(data === node.data){
    //node has no children
    if(node.left === null && node.right === null){
      return null;
    }
    // node has no left child
    if(node.left === null){
      return node.right;
    }
    //node has no right child
    if(node.right === null){
      return node.left;
    }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data){
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

//update when count field needs to be incremented
function update(data){
  var grade = this.find(data);
  grade.count++;
  return grade;
}

//display grades
function prArray(arr){
  putstr(arr[0].toString() + ' ');
  for(var i = 1; i < arr.length; i++){
    putstr(arr[i].toString() + ' ');
    if(i % 10 === 0){
      putstr("\n");
    }
  }
}

function genArray(length){
  var arr = [];
  for(var i = 0; i < length; i++){
    arr[i] = Math.floor(Math.random() * 101);
    return arr;
  }
}