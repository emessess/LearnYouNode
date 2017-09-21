const fs = require('fs');
const path = require('path');
const dir = process.argv[2];

fs.readdir(dir, (err, list) => {
  if (err) throw err;
  const filteredls = list.filter(item => path.extname(item).slice(1) === process.argv[3]);
  filteredls.forEach(item => console.log(item));
});
