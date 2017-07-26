'use strict'

function selectionSort(arrays){
  for (var i = 0; i < arrays.length; i++) {
    var smallest = i;
    for (var j = i; j < arrays.length; j++) {
      smallest = arrays[j] < arrays[smallest] ? j : smallest 
    }

    if (arrays[smallest] < arrays[i]) { //swap
      var temp = arrays[i]
      arrays[i] = arrays[smallest]
      arrays[smallest] = temp
    }
  }
  return arrays
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

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()
