var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newCandy){
  return [newCandy, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy){
  chocolateBars.unshift(newCandy)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, newCandy){
  return [...chocolateBars, newCandy]
}

function destructivelyAddElementToEndOfArray(chocolateBars, newCandy){
  chocolateBars.push(newCandy)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(){
  
}