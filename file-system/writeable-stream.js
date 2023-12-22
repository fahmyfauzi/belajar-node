const fs = require('fs');

const writeableStream = fs.createWriteStream('./files/output.txt');

writeableStream.write('Ini merupakan teks baris pertama update!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.write('Ini merupakan teks baris ketiga!');
writeableStream.end();
