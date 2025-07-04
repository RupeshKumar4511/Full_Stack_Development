// The crypto module provides cryptographic functionality (like hashing, encryption, signing, etc.).

import crypto from 'node:crypto'
// console.log(crypto)



// const hash = crypto.createHash('sha256');
// Creates a hash object using a specified algorithm (e.g., 'sha256')

// hash.update("John Smith");

// console.log(hash.digest('hex'))





// crypto.generateKeyPair('rsa', {
//   modulusLength: 2048,
//   publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
//   privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
// }, (err, publicKey, privateKey) => {
//   if (err) throw err;
//   console.log('Public Key:', publicKey);
//   console.log('Private Key:', privateKey);
// });

// Generates public/private key pairs (e.g., RSA or EC).



// Digitally signs data.

// const { privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// const sign = crypto.sign('sha256', Buffer.from('message to sign'), {
//   key: privateKey,
// });
// console.log('Signature:', sign.toString('hex'));



// sign and verify the digital signature.
const { publicKey ,privateKey} = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});


const message = Buffer.from('message to sign');

const signature = crypto.sign('sha256', message, { key: privateKey });

const isValid = crypto.verify('sha256', message, { key: publicKey }, signature);

console.log('Signature valid?', isValid);



