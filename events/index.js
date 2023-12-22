/* eslint-disable no-console */
// Node js global object
// run REPL: Object.getOwnPropertyNames(global)

const { EventEmitter } = require('events');
const moment = require('moment');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  const date = moment().format('MMM Do YY');
  // eslint-disable-next-line no-console
  console.log(`Kopi ${name} telah dibuat pada tanggal ${date}`);
};

const makeBill = ({ price }) => {
  const date = moment().format('MMM Do YY');
  // eslint-disable-next-line no-console
  console.log(`Bill pada tanggal ${date} sebesar ${price}`);
};

const payCoffee = ({ price }) => {
  const date = moment().format('MMM Do YY');
  console.log(`Coffee telah dibayar sebesar ${price} pada tanggal ${date}`);
};
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);
myEventEmitter.on('pay-order', payCoffee);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
myEventEmitter.emit('pay-order', { price: 15000 });
