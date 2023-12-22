/* eslint-disable no-console */
/* eslint-disable max-len */
/**
 * TODO: Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
 * TODO: Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).
 */

const fs = require('fs');
const path = require('path');

// Membuat Readable Stream untuk membaca file 'input.txt'
// dengan opsi konfigurasi { highWaterMark: 15 }
const readStream = fs.createReadStream(path.resolve(__dirname, './files/input.txt'), { highWaterMark: 15 });

// Membuat Writable Stream untuk menulis ke file 'output-exercise.txt'
const writeStream = fs.createWriteStream(path.resolve(__dirname, './files/output-exercise.txt'));

// Event listener untuk event 'readable'
readStream.on('readable', () => {
  // Membaca data dari stream dan menuliskannya ke writable stream
  // dengan menambahkan baris baru setiap bagian teks ('\n')
  writeStream.write(`${readStream.read()}\n`);
});

// Event listener untuk event 'end'
readStream.on('end', () => {
  // Mengakhiri writable stream dan mencetak pesan 'success' ke konsol
  writeStream.end('');
  console.log('success');
});
