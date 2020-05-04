function breakOut(array, changeValue, stopValue){
  for(var i=0; i<array.length; i++){
    if(array[i] !== stopValue){array.splice(i, 1, changeValue)}
    else {
     break;
    }
  }
  }
