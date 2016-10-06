//24 hour clock input? the larger or smaller angle? including moving?
//input as float or integer?
function timeAngle(hour, minute){
  var minAngle,
    hourAngle;
    
  minAngle = 360* (minute/60);
  
  hourAngle = (360*(hour/12)) + ((360/12)*(minute/60));
  
  if (hourAngle > minAngle){
    return hourAngle - minAngle;
  } else {
    return minAngle - hourAngle;
  }
  
}

timeAngle(6, 30);