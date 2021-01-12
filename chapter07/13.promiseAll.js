"use strict";
exports.__esModule = true;
var fs = require("fs");
var util_1 = require("util");
var readFile = util_1.promisify((fs.readFile));
var writeFile = util_1.promisify((fs.writeFile));
var data = readFile('data.txt', { encoding: 'utf-8' });
var data2 = readFile('data2.txt', { encoding: 'utf-8' });
console.log('1. start');
Promise.all([data, data2]).then(function (values) {
    var out = values[0] + values[1];
    console.log(out);
    writeFile('out.txt', out);
})["catch"](function (error) {
    console.log(error);
});
console.log('2. end');
