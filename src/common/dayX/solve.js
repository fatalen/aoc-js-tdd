import { readInput } from '../../common/readInput'

// https://adventofcode.com/Y/day/X

const rawInput = readInput(__dirname)

function convert(rawInput) {
    const input = rawInput.split('\n')
    return input
}

export function part1(rawInput) {
    const input = convert(rawInput)
    return 0
}

export function part2(rawInput) {
    const input = convert(rawInput)
    return 0
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
})
