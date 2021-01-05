import * as fs from 'fs'

console.log('1, start')
fs.readFile('data.txt', {encoding: 'utf-8'}, (error: NodeJS.ErrnoException, data: string) => {
        fs.readFile('data2.txt', {encoding: 'utf-8'}, (error: NodeJS.ErrnoException, data2: string) => {
            const result = data + data2
            fs.writeFile('out.txt', result, (error: NodeJS.ErrnoException) => {
                console.log(result)
            })
        })
    }
)
console.log('2, end')