import * as fs from 'fs';
import * as path from 'path';

export function readInput(dirName, fileName = 'input.txt') {
    const filePath = path.resolve(dirName, fileName)
    return fs.readFileSync(filePath).toString()
}