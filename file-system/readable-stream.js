const fs = require('fs');

// Membuat Readable Stream untuk membaca file 'article.txt'
// dengan opsi konfigurasi { highWaterMark: 10 }
const readableStream = fs.createReadStream('./files/article.txt', { highWaterMark: 10 });

// Event listener untuk event 'readable'
readableStream.on('readable', () => {
  try {
    // Membaca data dari stream menggunakan metode 'read()'
    // dan menuliskannya ke konsol dalam tanda kurung siku
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log('something wrong');
  }
});

readableStream.on('end', () => {
  console.log('Done');
});
