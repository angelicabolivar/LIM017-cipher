import cipher from './cipher.js';

console.log(cipher);
console.log(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")); //ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG")); //HIJKLMNOPQRSTUVWXYZABCDEFG