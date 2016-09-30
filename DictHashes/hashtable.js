//hashing = finding a value in a data structure in the shortest time possible
function Hashtable(){
  var table = [];

  this.put = function(key,value){
    //COOL
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  }

  this.remove = function(key){
    table[loseloseHashCode(key)] = undefined;
  }

  this.get = function(key){
    return table[loseloseHashCode(key)];
  }

  var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
}