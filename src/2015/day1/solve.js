import { readInput } from '../../common/readInput'

// https://adventofcode.com/2015/day/1

const rawInput = readInput(__dirname)

function convert(rawInput) {
    const input = rawInput.split('')
    return input
}

function getBracerValue(char) {
    const dict = {
        '(': 1,
        ')': -1,
    }
    return dict[char]
}

export function part1(rawInput) {
    const input = convert(rawInput)
    const result = input
        .map(getBracerValue)
        .reduce((acc, cur) => acc + cur, 0)
    return result
}

export function part2(rawInput) {
    const input = convert(rawInput)
    const result = input
        .map(getBracerValue)
        .reduce((acc, cur) => [...acc, acc.at(-1) + cur], [0])
        .findIndex(el => el === -1)
    return result
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
})
