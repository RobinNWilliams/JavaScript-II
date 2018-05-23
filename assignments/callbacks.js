const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  cb(arr[0]);
 
  // firstItem passes the first item of the given array to the callback function.
}

function getLength(arr, cb) {
cb(arr.length);
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  for(let i=0;i<list.length; i++) {
    if (list[i] === item) // got this far without help
    {
      return cb(true);
    }
  }
  return cb(false);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
