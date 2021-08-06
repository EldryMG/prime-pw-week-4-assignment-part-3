console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
   basket.push(item);
   return true;
}

console.log(`Basket is ${basket.length}`);
console.log('Adding soda (expect true)', addItem('soda'));
console.log(`Basket is now ${basket}`);
console.log(`Adding sushi bowl and soup to basket`, addItem(`sushi bowl`), addItem(`soup`));
console.log(`Basket now has ${basket.length} items,${basket}.`)
console.log(`Adding coffee`, addItem(`coffee`));
console.log(`Basket now has ${basket.length} items,${basket}.`)


function listItems(anArray){
  for( i=0; i<anArray.length; i++){
    console.log(i, anArray[i]);
  } return `Basket has ${anArray.length} items`
}

console.log(`The basket has ${listItems(basket)} in it.`);
console.log(basket);

//console.log(basket.length); // currently equals 4.
var currentBasket;

function empty(){
   return basket = [];

}
console.log(empty());
console.log( `The basket has ${basket.length} items.`);

console.log(`Basket has ${basket.length} items in it.`);
console.log('Adding water (expect true)', addItem('water'));
console.log(`Basket is now ${basket}`);
console.log(`Adding spinach and bananas to basket`, addItem(`spinach`), addItem(`bananas`));
console.log(`Basket now has ${basket.length} items,${basket}.`)
console.log(`Adding Apple Cider Vinegar`, addItem(`A.C.V`));
console.log(`Basket now has ${basket.length} items, ${basket} .`)
