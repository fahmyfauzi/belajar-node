/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// akses berkas || read file
const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

// secara asynchronius
//menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.
// fs.readFile('./files/todo.txt', 'utf-8', fileReadCallback);
fs.readFile(path.resolve(__dirname, './files/todo.txt'), 'utf-8', fileReadCallback);

//secara synchronius
// const data = fs.readFileSync('./files/todo.txt', 'utf-8');
// console.log(data);
