"use strict";
exports.__esModule = true;
var fs = require("fs");
console.log('1. start');
fs.readFile('data.txt', { encoding: 'utf-8' }, function (error, data) {
    console.log(data);
});
console.log('2. end');
console.log('3. start');
var data = fs.readFileSync('data2.txt', { encoding: 'utf-8' });
console.log(data);
console.log('4. end');
