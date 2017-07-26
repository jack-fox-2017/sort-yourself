'use strict'

function swapHelper(array,i,j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(arrays){
  var temp = '';
  for (var i = 0; i < arrays.length; i++) {
    var min = i;
    for (var j = i+1; j < arrays.length; j++) {
      if (arrays[j] < arrays[min]) {
        min = j
      }
    }
    if (i !== min) {
      swapHelper(arrays, i, min)
    }
  }
  return arrays
}

// Driver code
function main() {

  sort_from_file('test.txt')
  //sort_from_file('random_wordlist.txt')
  //sort_from_file('reversed_wordlist.txt')
  //sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")
    //var items = [2,3,4,1,21,4,5,6,3]
    selectionSort(items);
    //console.log(items);
    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()
