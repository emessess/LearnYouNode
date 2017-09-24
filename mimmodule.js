
const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, cb) {
  fs.readdir(directory, (err, list) => {
    if (err) return cb(err);
    const filteredFiles = list.filter(item => path.extname(item).slice(1) === extension);
    cb(null, filteredFiles);
  });
};

