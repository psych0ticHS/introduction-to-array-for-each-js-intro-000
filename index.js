function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
var animals = ["dog", "fish", "cat"]

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}


doToElementsInArray(animals, changeCompletely)

// log out animals -- pretty cool, right?
console.log(animals)
