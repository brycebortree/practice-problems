function sort(list) {

  while(list[0] > list[list.length - 1]) {
    
      for(var i = 0; i < list.length; i++) {
      a = list[i];
      b = list[i + 1];
      
      if(a > b) {
        list[i] = b;
        list[i + 1] = a;
      }
    }
  return list;
  }
}

ll = [4, 7, -18, 33, 1]

sort(ll);