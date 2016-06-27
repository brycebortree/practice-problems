// 1. Write a function called reverse() that accepts a list and
//   returns a new list with reversed contents. Do not use the
//   built in reverse function!

   create list to hold reversed array

   iterate over the array from beginning to end
      add things to the list one by one

   return array containing reversed contents

   function reverse(list){
      //put things from list into revList
      var revList = [];
      var len = list.length;
      
      if(list === []) {
         return [];
      } else {
         for(var i = len - 1; i >=0 ; i--) {
             revList.push(list[i]);
         }
      }
      
   return revList;
   }

   OR

   function popReverse(a) {
      var revList = [];
      while (a.length > 0) {
         revList.push(a.pop());
      }
      return revList;
   }



   reverse([]) // returns []
   reverse([1,2]) // returns [2,1]
   reverse([1,2,3,4,5]) // returns [5,4,3,2,1]

2. Write a function merge() that accepts two sorted lists
   and merges them together into a new sorted list.

   merge([], []) // returns []
   merge([], [2]) // returns [2] 
   merge([3], []) // returns [3] 
   merge([1, 7], [5]) // returns [1, 5, 7]
   merge([1,3,5], [2,4,6,8,10]) // returns [1,2,3,4,5,8,10]




// 2. Write a function merge() that accepts two sorted lists
//   and merges them together into a new sorted list.

   store the value of the total length of both lists
   create an array merged to store contents of both lists

   create variables i1, i2, m to store indexes for 3 lists
   i1 starts at 0 and represents index l1
   i2 starts at 0 and represents index l2
   m index of final list

   iterate from 0 to the total length of both lists
   if the current index of li[i1] < l2[i2]
      append the value of li[i1 to merged[m]
      increment i1
   else
      append the value of l2[i2] to merge[m]
      increment i2

   return m

function merge(l1, l2) {
  var merged = [];
  while (l1.length > 0 && l2.length > 0) {
    if (l1[0] <= l2[0]) {
      merged.push(l1[0]);
      l1.splice(0, 1)
    } else {
      merged.push(l2[0]);
      l2.splice(0, 1);
    }
  }
  var longer = (l1.length > l2.length) ? l1 : l2;
  merged = merged.concat(longer);
  return merged;
}

   merge([], []) // returns []
   merge([], [2]) // returns [2] 
   merge([3], []) // returns [3] 
   merge([1, 7], [5]) // returns [1, 5, 7]
   merge([1,3,5], [2,4,6,8,10]) // returns [1,2,3,4,5,8,10]


3. Give a sentence ex. "hello there buddy", return it in camelcase. helloThereBuddy.

var camelCase = function(string) {
      var stringArr = string.split(" ");
      var camelString = [];
      for (var i = 0; i < stringArr.length; i++) {
          if (i === 0) {
              camelString.push(stringArr[i]);
          } else {
              var camelWord = stringArr[i].split('');
              camelWord[0] = camelWord[0].toUpperCase();
              camelWord = camelWord.join('');
              camelString.push(camelWord);
          }
      }
      console.log(camelString.join(""));
  }

  camelCase("hello there buddy");

4. Pair programming exercise
write a function that takes in an array of numbers ex [2, 82, 35, 100]

function stuff(a) {
  var o = {};
  var newA = [];
  for (var i=0; i < a.length; i++) {
    var sNum = a[i].toString();
    var newNum = 0;
    for (var j=0; j < sNum.length; j++) {
      newNum += parseInt(sNum[j]);
    }
    o[newNum] = a[i];
  }
  console.log(o);
  var sortedKeys = Object.keys(o).map(function(k) {
    return parseInt(k);
  }).sort(function(a, b) {
    return a - b;
  })
  for (var key = 0; key < sortedKeys.length; key ++) {
    newA.push(o[sortedKeys[key]])   
  }
  return newA;
}

console.log(stuff([2,82,35,100]))


OR: 

function sumSort(arr) {
  var sumArr = [];
  var answer = [];
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      var newArr = [];
      var sumNum = 0;
      if (arr[i] > 1) {
        newArr = arr[i].toString().split('');
        for (var j = 0; j < newArr.length; j++) {
          sumNum += Number(newArr[j]);
        }
        sumArr.push({arrNum: arr[i], sum: sumNum});
      } else {
        sumArr.push({arrNum: arr[i], sum: sumNum});
      }
    }
    sumArr.sort(function(a, b) {
      return a.sum - b.sum;
    })
    for (var k = 0; k < sumArr.length; k++) {
      answer.push(sumArr[k].arrNum);
    }
    console.log(answer);
  } else {
    return "Array undefined."
  }
}

sumSort([ 2, 82, 35, 100]);



// 5. Write a function called daysInMonth that accepts an integer between 1 and 12 representing the month and returns the number of days in that month. Ignore leap year.

var today = new Date();
var todaysDay = today.getDate();
var todaysMonth = today.getMonth(); 

function daysInMonth(todaysMonth) {
  if(todaysMonth === (0 || 3 || 5 || 7 || 8 || 10 || 12)){
    return 31;
  } else if (todaysMonth === (4 || 6 || 9 || 11)){
    return 30;
  } else {
    return 29;
  }
}

daysInMonth(2);

6. Write a function called daysToBirthday that accepts two integers representing someone's birth month and birth date and returns the total number of days until their next birthday.

//semi functional code

function daysToBirthday(bMonth, bDay) {
  // console.log(todaysMonth - bMonth);
  // console.log(todaysDay - bDay);
  
  //start by counting days in current month - todaysDay
  // if(todaysMonth <= bMonth && todaysDay <=bDay) {
  //  bMonth += 12;
  // }
  
  var daysInCurrent = daysInMonth(todaysMonth) - bDay;
  var daysInFinal = bDay; 
  extraDays = daysInCurrent + daysInFinal;
  var days = 0;
  
  for(var i = todaysMonth + 1; i < bMonth  - 1; i++) {
      days = extraDays += daysInMonth(i);
  }
  
  console.log(days);
  //then add each amount of days between now and then
  

  // for(var i = 0; i < 12, i++)
  
}

//Steve's solution

function daysInMonth(month) {
  var thirties = [4, 6, 9, 11];
  if (month == 2) {
    return 28;
  } else if (thirties.indexOf(month) !== -1) {
    return 30;
  } else {
    return 31;
  }
}

function daysToBirthday(birthMonth, birthDay) {
  // keep track of todays date
  var today = new Date();
  var todaysDay = today.getDate();
  var todaysMonth = today.getMonth() + 1;

  // set variables to keep track of a virtual date
  // count the days until we get there
  var days = 0;
  var countDay = todaysDay;
  var countMonth = todaysMonth;

  while (true) {
    if (countDay == birthDay && countMonth == birthMonth) {
      return days;
    }

    // increment the number of days we've counted
    days++;

    // increment calendar days
    if (countDay < daysInMonth(countMonth)) {
      countDay++;
    // roll over at the end of each month
    } else {
     countDay = 1;
     countMonth++;
     // roll over into new year
     if (countMonth > 12) {
       countMonth = 1;
     }
    }
  }

  return days;
}  



########WEEK7
<!-- Create a function that, give na DOM Element on the page, will visit the element itself and all of its descendents (not just the children), for each elemenet, visited, the function should pass that eleement to a provided callback function.  -->

var writer = function(element, callback){
  callback(element);
  var these = element.children;
  for(var i=0; i < these.length; i++){
    writer(these[i], callback);
  }
}

<!-- Write a mul element that will produce the following output
function console.log(mul(2)(3)(4)) -> 24 -->

var mul = function(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    }
  }
}

<!-- Fizzbuzz with ruby with no else ifs -->

def fizzbuzz(num)
  if num % 15 == 0
    puts fizzbuzz
  end
  if num % 3 == 0
    puts fizz
  end
  if num % 5 == 0
    puts buzz
  end
  else 
    puts num
  end
end

fizzbuzz(1..100)
