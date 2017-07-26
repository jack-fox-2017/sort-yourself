'use strict'

function swapHelper(array,i,j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(items) {
  for (var i = 0; i < items.length; i++) {
    for (var j = 1; j < items.length; j++) {
      if(items[j-1] > items[j]){
        swapHelper(items, j-1,j)
      }
    }
  }
  return items
}


// Driver code
function main() {

  sort_from_file('test.txt')
  // sort_from_file('random_wordlist.txt')
  // sort_from_file('reversed_wordlist.txt')
  // sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort(items))

  })
}

main()
