import * as fs from 'fs'

console.log('1. start') // 1
fs.readFile('data.txt',
    { encoding: 'utf-8' },
    (error: NodeJS.ErrnoException, data: string) => { //7
    console.log(data); //8
})
console.log('2. end') //2


console.log('3. start') //3
const data = fs.readFileSync('data2.txt',
    { encoding: 'utf-8' }) //4
console.log(data) //5
console.log('4. end') //6
