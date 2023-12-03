import { readInput } from '../../common/readInput'

// https://adventofcode.com/2015/day/2

const rawInput = readInput(__dirname)

function convert(rawInput) {
    const input = rawInput.split('\n')
    return input
}

export const getDimensions = (box) => {
    const sizes = box.split('x')
    return {
        l: parseInt(sizes[0]),
        w: parseInt(sizes[1]),
        h: parseInt(sizes[2]),
    }
}

export const getArea = ({l, w, h}) => {
    const lw = l * w
    const wh = w * h
    const hl = h * l
    const smallest = [lw, wh, hl].reduce((acc, cur) => acc > cur ? cur : acc, Infinity)
    return (lw + wh + hl) * 2 + smallest
}

export const getRibbon = ({l, w, h}) => {
    const biggest = [l, w, h].reduce((acc, cur) => acc > cur ? acc : cur, 0)
    return (l * w * h) + (l + w + h - biggest) * 2
}

export function part1(rawInput) {
    const input = convert(rawInput)
    return input.map(getDimensions).map(getArea).reduce((acc, cur) => acc + cur, 0)
}

export function part2(rawInput) {
    const input = convert(rawInput)
    return input.map(getDimensions).map(getRibbon).reduce((acc, cur) => acc + cur, 0)
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
})
