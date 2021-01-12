import * as fs from 'fs'
import {promisify} from 'util'

const readFile = promisify(fs.readFile)

async function getData(fileName: string) {
    try{
        return await readFile(fileName, {encoding:'utf-8'})
    }catch (e){
        throw new Error(e.toString());
    }
}

async function song(){
    try{
        const data = await getData('data.txt');
        console.log(data);
    }catch (e){
        console.log(e)
    }
}

console.log('1.start');
song();
console.log('2.end')