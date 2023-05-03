/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

 let collection = ["hello","book","data","not empty", "notebook", "sally", "george","sappho"];
let removedItem = collection.pop();
collection.unshift(removedItem);
collection.sort();
let itemFound = collection.findIndex(item => item == "hello");
console.log(itemFound)
 console.log(collection)
let index = collection.indexOf("notebook");
collection.splice(itemFound, 1);
console.log(collection);
