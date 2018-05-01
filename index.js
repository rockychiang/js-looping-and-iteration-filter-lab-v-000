function findMatching(array, name) {
  return array.filter(function(n) {return n.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(array, initial) {
  return array.filter(function(n){return n[0] === initial})  
}

function matchName() {
  
}