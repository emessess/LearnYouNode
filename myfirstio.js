const fs = require('fs');
const buf1 = fs.readFileSync(process.argv[2]).toString();
console.log(buf1.split('\n').length - 1)