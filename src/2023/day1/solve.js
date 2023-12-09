import { readInput } from '../../common/readInput'

// https://adventofcode.com/2023/day/1

const rawInput = readInput(__dirname)

function convert(rawInput) {
    const input = rawInput.split('\n')
    return input
}

export const getDigits = (row) => {
    const allDigits = row.split('').reduce((acc, cur) => {
        const curNumber = Number(cur)
        if (!isNaN(curNumber)) {
            acc.push(curNumber)
        }
        return acc
    }, [])
    return parseInt(`${allDigits.at(0)}${allDigits.at(-1)}`)
}

export const getDigitsWithWords = (row) => {
    const dict = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    const allDigits = row.split('').reduce((acc, cur, index, arr) => {
        const curNumber = Number(cur)
        if (!isNaN(curNumber)) {
            acc.push(curNumber)
        }
        const candidate = arr.slice(index, index + 5).join('')
        const key = Object.keys(dict).find(el => candidate.startsWith(el))
        if (key) {
            acc.push(dict[key])
        }
        return acc
    }, [])
    return parseInt(`${allDigits.at(0)}${allDigits.at(-1)}`)
}

export function part1(rawInput) {
    const input = convert(rawInput)
    const sum = input.map(getDigits).reduce((acc, cur) => acc + cur, 0)
    return sum
}

export function part2(rawInput) {
    const input = convert(rawInput)
    const sum = input.map(getDigitsWithWords).reduce((acc, cur) => acc + cur, 0)
    return sum
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
})
