const fs = require("fs");
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'article.txt'), {
    highWaterMark: 10
});

const writeableStream = fs.createWriteStream(resolve(__dirname, 'output_latihan.txt'));

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}`);
    } catch (error) {
        console.log('failed!')
    }
});

readableStream.on('end', () => {
    writeableStream.end();
    console.log('done');
})