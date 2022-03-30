/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function write() {
  const arr = process.argv.slice(2);

  if (!fs.existsSync(`./src/${arr[0]}`)) {
    console.log('Your first file does not exist in src');

    return;
  }

  if (!arr[1].includes('/') && !fs.existsSync(arr[1])) {
    fs.rename(`./src/${arr[0]}`, `./src/${arr[1]}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return;
  }

  if (!fs.existsSync(arr[1])) {
    console.log('Your first file does not exist in main directory');

    return;
  }

  fs.readFile(`./src/${arr[0]}`, (err, data) => {
    if (err) {
      console.log(err);

      return;
    }

    fs.writeFile(`${arr[1]}/${arr[0]}`, data, (error) => {
      if (error) {
        console.log(err);

        return;
      }

      fs.unlinkSync(`./src/${arr[0]}`);
    });
  });
};

write();
