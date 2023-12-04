import { readInput } from '../../common/readInput'

// https://adventofcode.com/2015/day/3

const rawInput = readInput(__dirname)

function convert(rawInput) {
    const input = rawInput.split('')
    return input
}

function getChange(char) {
    const dict = {
        '>': [1, 0],
        '<': [-1, 0],
        '^': [0, -1],
        'v': [0, 1],
    }
    return dict[char]
}

const move = ([x, y], [xChange, yChange]) => [x + xChange, y + yChange]

export function part1(rawInput) {
    const input = convert(rawInput)
    const houses = new Set(['0,0'])
    input.reduce((acc, cur) => {
        const newPos = move(acc, getChange(cur))
        houses.add(newPos.join(','))
        return newPos
    },[0,0])
    return houses.size
}

export function part2(rawInput) {
    const input = convert(rawInput)
    const houses = new Set(['0,0'])
    input.reduce((acc, cur, index) => {
        const accIndex = index % 2
        const newPos = move(acc[accIndex], getChange(cur))
        houses.add(newPos.join(','))
        acc[accIndex] = newPos
        return acc
    },[[0,0],[0,0]])
    return houses.size
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
})
