// Stream is based on the top of buffering in controlled way.
// Streams are a chain of buffers with traffic control.

import fs from 'node:fs';

const source = fs.createReadStream('./source.txt');
const destination = fs.createWriteStream('./destination.txt');
// default file stream chunk/buffer is 64KB

source.pipe(destination);

/*
1. Transfers data chunk-by-chunk (buffering)

Internally equivalent to:

readable.on('data', chunk => {
  writable.write(chunk);
});


But safer and smarter.

Each chunk is a Buffer

Chunk size depends on highWaterMark

No full data load

2 Handles backpressure automatically (CRITICAL)

This is the big one.

Problem:

Writable stream is slower than readable.

What pipe() does:
if (!writable.write(chunk)) {
  readable.pause();
}


And later:

writable.on('drain', () => {
  readable.resume();
});
*/

destination.on('finish', () => {
  console.log('File copied successfully');
});

source.on('error', console.error);
destination.on('error', console.error);
