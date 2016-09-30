function Dictionary(){
  var items = {};

  //if has takes an arg, pass it in on function
  this.has = function(key){
    return key in items;
  }

  this.set = function(key,value){
    items[key] = value;
  }


  this.remove = function(key){
    if(this.has(key)){
      //removes given property from an object
      delete items[key];
      return true;
    }
    return false;
  }

  //for retrieving values of KEY
  this.get = function(key){
    return this.has(key) ? items[key] : undefined;
  }
  
  //grabs all values from function
  this.values = function(){
    var values = [];
      for (var k in items){
        if(this.has[k]){
          values.push(items[k]);
        }
      }
    return values;
  }

  this.clear = function(){
    items = {};
  }

  this.size = function(){
    return Object.keys(items).length;
  }

  this.keys = function(){
    return Object.keys(items);
  }
}

var dict = new Dictionary();
dict.set('Gandalf', 'gandalf@email.com');
dict.set('Bilbo', 'bilbo@email.com');
dict.set('Frodo', 'frodo@email.com');

console.log(dict.size());