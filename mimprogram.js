const myModule = require('./mimmodule.js');

const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, (err, list) => {
  if (err) {
    console.log('read error');
    return err;
  }

  list.forEach((file) => console.log(file));
});
