console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5


function addItem(item) {
  basket.push(item);
  isFull();
  return true;
}

console.log('Adding almonds (expect true)', addItem('almonds'));
console.log('Adding cheese (expect true)', addItem('cheese'));

console.log(`Adding coffee`, addItem(`coffee`));
console.log('Adding steak (expect true)', addItem('steak'));
console.log('Adding soda (expect true)', addItem('soda'));
console.log(`Adding sushi bowl to basket`, addItem(`sushi bowl`));
console.log(`The basket has ${listItems(basket)} in it.`);
empty();
console.log(addItem('cake'));
console.log(addItem('juice'));
console.log(addItem('granola bar'));
console.log(addItem('pie'));
console.log(addItem('pizza')); // Adds item.
console.log(addItem('hot pockets')); // function isFull() returns true and keeps item out.

function listItems(anArray) {
  for (i = 0; i < anArray.length; i++) {
    console.log(i, anArray[i]);
  }
  return `Basket has ${anArray.length} items`
}




function empty() {
  return basket = [];

}
// Stretch
function isFull() {
  for (i = 0; i < basket.length; i++) {
    if (basket.length <= maxItems) {
      console.log(`${basket} in basket.`)
      return false;
    } else {
      basket.pop(i);
      console.log(`Too many items.`)
      return true;
    }
  }
}
