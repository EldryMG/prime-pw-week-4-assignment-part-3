console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5

// 1. addItem function and isFull function:
function addItem(item) {   //Is this the best way to format this loop?
  basket.push(item);
  isFull();
  return true;             //What is the intented purpose of adding the return statement? Is it a way to guarantee we get out of the function?
}

console.log(addItem('cake')); // Adds item.
console.log(addItem('juice')); // Adds item.
console.log(addItem('granola bar')); // Adds item.
console.log(addItem('pie')); // Adds item.
console.log(addItem('pizza')); // Adds item.
console.log(addItem('tea')); // isFull function prevents 6th item from being added and messages "Too many items."


// 2. listItems function:
function listItems(anArray) {
  for (i = 0; i < anArray.length; i++) {
    console.log(i, anArray[i]);
  }
  return `Basket has ${anArray.length} items`
}

console.log(listItems(basket));



// 3. empty function.
function empty() {
  return basket = [];

}
// Stretch
function isFull() {     
    if (basket.length <= maxItems) {
      console.log(`${basket} in basket.`)
      return false;
    } else {
      basket.pop();
      console.log(`Too many items.`)
      return true;
    }
}
