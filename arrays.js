var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newCandy){
  return [newCandy, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy){
  chocolateBars.unshift(newCandy)
  return chocolateBars
}

function addElementToEndOfArray(){
  
}

function destructivelyAddElementToEndOfArray(){
  
}