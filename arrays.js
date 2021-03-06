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

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop(1)
  return  chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length -1)
  return chocolateBars
}