//following code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data){
  //every new node is the root
  var node = new Node(data);
  this._root = node;
}

var tree = new Tree('CEO');
tree._root;

Tree.prototype.traverseDF = function(callback){
  //imediate recurse function
  (function recurse(currentNode){
    //step two
    for(var i = 0, length = currentNode.children.length; i < length; i++){
      //step three
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
    //step one - AH
  })(this._root);
}

tree.traverseDF(function(node){
  console.log(node.data);
})

Tree.prototype.traverseBF = function(callback){
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while(currentTree){
    for(var i = 0, length = currentTree.children.length; i < length; i++){
      queue.enqueue(currentTree.children[i]);
    }
    callback(currentTree);
    currentTree = queue.dequeue();
  }
}

traverseBF(function(node){
  console.log(node.data);
})

Tree.prototype.contains = function(callback, traversal){
  traversal.call(this, callback);
}

Tree.prototype.add = function(data, toData, traversal){
  var child = new Node(data),
      parent = null;
      callback = function(node){
        if(node.data === toData){
          parent = node;
        }
      }
  this.contains(callback, traversal);

  if(parent){
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Erorr('Cannot add node to a nonexistent parent');
  }
}

Tree.prototype.remove = function(data, fromData, traversal) {
  var tree = this,
      parent = null,
      childToRemove = null,
      index;

  var callback = function(node){
    if(node.data === fromData){
      parent = node;
    }

  this.contains(callback, traversal);

  if(parent){
    index = findIndex(parent.child, data);

    if(index === undefined){
      throw new Error('Node to remove does not exist');
    } else {
      childToRemove = parent.children.splice(index, 1);
  } else {
    throw new Error('Parent does not exist');
  }
  return childToRemove;
}

function findIndex(arr, data){
  var index;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].data === data){
      index = i;
    }
  }
  return index;
}

