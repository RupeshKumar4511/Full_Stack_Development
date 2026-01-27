// The Buffer class in Node.js allows us to work with binary data directly. It’s essential when dealing with streams, files, TCP sockets, etc.

//create buffer from string, array and another buffer.
const buf = Buffer.from("Hello World");
console.log(buf)

// Convert buffer to string.
console.log(buf.toString('utf-8', 0, 5)); // Hello

// convert buffer to json
console.log(buf.toJSON());

const b1 = Buffer.from('test');
const b2 = Buffer.from('test');
console.log(b1.equals(b2)); // true


const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString()); // Hello World


console.log(buf.indexOf('World')); // 6

console.log(buf.includes('World')); // true


// Allocate a zero-filled buffer.
const buffer = Buffer.alloc(5);
console.log(buffer); // // <Buffer 00 00 00 00 00>


// writing string into buffer
const b = Buffer.alloc(15);
b.write('Hello World');
// b.fill("Hel",12,15)
console.log(b.toString('utf-8')); // Hello World


//Read integers from buffer (signed or unsigned, 8/16/32 bit).
const IntegerBuffer = Buffer.from([1, 2, 3, 4]);
console.log(IntegerBuffer.readInt8(0)); // 1


// Example of Buffering with File System
import fs from 'node:fs';
import { Buffer } from 'node:buffer';

fs.open('./test.txt', 'r+', (err, fd) => {
  if (err) throw err;

  fs.fstat(fd, (err, stats) => {
    if (err) throw err;

    const fileSize = stats.size;
    const chunkSize = 100;

    const tempBuffer = Buffer.alloc(chunkSize);
    const actualBuffer = Buffer.alloc(fileSize);

    let offset = 0;

    function readNextChunk() {
      if (offset >= fileSize) {
        console.log(actualBuffer.toString());
        fs.close(fd, () => {});
        return;
      }

      fs.read(
        fd,
        tempBuffer,
        0,
        chunkSize,
        offset,
        (err, bytesRead) => {
          if (err) throw err;

          tempBuffer.copy(actualBuffer, offset, 0, bytesRead);
          offset += bytesRead;

          readNextChunk();
        }
      );
    }

    readNextChunk();
  });
});




