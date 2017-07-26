'use strict'

function bubbleSort(items) {
  for (var i = 0; i < items.length; i++) {
    for (var j = items.length - 1; j > i; j--) {
      if (items[j - 1] < items[j]) { //swap
        var temp = items[j]
        items[j] = items[j-1]
        items[j-1] = temp
      }
    } 
  }
  return items
}


// Driver code
function main() {

  // sort_from_file('random_wordlist.txt')
  // sort_from_file('reversed_wordlist.txt')
  // sort_from_file('sorted_wordlist.txt')
  sort_from_file('test.txt')

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
