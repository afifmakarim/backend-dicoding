const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('hbd-wish', birthdayEventListener);

myEmitter.emit('hbd-wish', "Afif");