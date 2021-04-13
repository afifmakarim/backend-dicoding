const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffe = (name) => {
    console.log(`kopi ${name} telah dibuat!`);
}

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffe(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order', { name: "Tubruk", price: 15000 });