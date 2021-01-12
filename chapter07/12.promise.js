"use strict";
exports.__esModule = true;
var fs = require("fs");
var util_1 = require("util");
console.log('start 1');
var readFile = util_1.promisify(fs.readFile);
readFile('data.txt', { encoding: 'utf-8' })
    .then(function (data) {
    console.log(data);
})["catch"](function (e) {
    console.log(e.toString());
});
console.log('end 2');
