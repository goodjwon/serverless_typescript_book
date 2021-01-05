"use strict";
exports.__esModule = true;
var fs = require("fs");
console.log('1, start');
fs.readFile('data.txt', { encoding: 'utf-8' }, function (error, data) {
    fs.readFile('data2.txt', { encoding: 'utf-8' }, function (error, data2) {
        var result = data + data2;
        fs.writeFile('out.txt', result, function (error) {
            console.log(result);
        });
    });
});
console.log('2, end');
