import { readInput } from '../../common/readInput'

// https://adventofcode.com/2023/day/5

const rawInput = readInput(__dirname)

export function convert(rawInput) {
    const getSeeds = (rawSeeds) => rawSeeds.split(' ').map(el => parseInt(el, 10)).splice(1)
    const getMap = (rawMap) => rawMap.split('\n').splice(1).map(row => row.split(' ').map(el => parseInt(el, 10)))
    const input = rawInput.split('\n\n')
    const seeds = getSeeds(input[0])
    const seedSoil = getMap(input[1])
    const soilFertilizer = getMap(input[2])
    const fertilizerWater = getMap(input[3])
    const waterLight = getMap(input[4])
    const lightTemperature = getMap(input[5])
    const temperatureHumidity = getMap(input[6])
    const humidityLocation = getMap(input[7])
    return [
        seeds,
        [seedSoil, soilFertilizer, fertilizerWater, waterLight, lightTemperature, temperatureHumidity, humidityLocation]
    ]
}

const getRange = ([start, length]) => [start, start + length - 1]

export const getRangeWithOffset = ([destStart, start, length]) => [...getRange([start, length]), destStart - start]
 
export const getRangesMapValue = (input, rangesMap) => {
    const range = rangesMap.find(([rangeStart, RangeEnd]) => input >= rangeStart && input <= RangeEnd)
    if (!range) {
        return input
    }
    const [rangeStart, RangeEnd, offset] = range
    return input + offset
}

export function part1(rawInput) {
    const [seeds, maps] = convert(rawInput)
    const rangesMaps = maps.map(el => el.map(getRangeWithOffset))
    const locations = seeds.map(seed => rangesMaps.reduce(getRangesMapValue, seed))
    return Math.min(...locations)
}

export function getSeedsFromRange ([startSeed, range]) {
    const seeds = new Array(range).fill(startSeed)
    return seeds.reduce((acc, cur, index) => [...acc, cur + index], [])
}

export function splitToPairs(values) {
    return values.reduce((acc, cur, index) => {
        const outerIndex = Math.floor(index / 2)
        const innerIndex = index % 2
        if (!acc[outerIndex]) {
            acc[outerIndex] = []
        }
        acc[outerIndex][innerIndex] = cur
        return acc
    }, [])
}

export function part2Wrong(rawInput) {
    const [seedRanges, maps] = convert(rawInput)
    const rangesMaps = maps.map(el => el.map(getRangeWithOffset))
    const seeds = splitToPairs(seedRanges).reduce((acc, cur) => {
        return [
            ...acc,
            ...getSeedsFromRange(cur)
        ]
    }, [])
    const locations = seeds.map(seed => rangesMaps.reduce(getRangesMapValue, seed))
    return Math.min(...locations)
}

export const recursive = (pairs = [], map = [], resultPairs = [], index = 0) => {
    if (pairs.length === 0) {
        return resultPairs
    }
    const isLastMap = map.length === index + 1
    const nextIndex = isLastMap ? 0 : index + 1
    const pair = pairs.shift()
    const [destStart, rangeStart, rangeLength] = map[index]
    const offset = destStart - rangeStart
    const intersection = getIntersection(pair, [rangeStart, rangeLength])
    if (!intersection) {
        if (isLastMap) {
            resultPairs.push(pair)
        } else {
            pairs.push(pair)
        }
        return recursive(pairs, map, resultPairs, nextIndex)
    }
    resultPairs.push([intersection[0] + offset, intersection[1]])
    const subtract = subtractIntersection(pair, intersection)
    pairs.push(...subtract)
    return recursive(pairs, map, resultPairs, nextIndex)
}

export const getIntersection = (range1, range2) => {
    const [r1Start, r1Length] = range1
    const r1End = r1Start + r1Length
    const [r2Start, r2Length] = range2
    const r2End = r2Start + r2Length
    const [intersectionStart, intersectionEnd] = [Math.max(r1Start, r2Start), Math.min(r1End, r2End)]
    if (intersectionStart >= intersectionEnd) {
        return null
    }
    return [intersectionStart, intersectionEnd - intersectionStart]
}

export const subtractIntersection = (range1, range2) => {
    const resultRanges = []
    const [r1Start, r1Length] = range1
    const r1End = r1Start + r1Length
    const [r2Start, r2Length] = range2
    const r2End = r2Start + r2Length
    if (r2Start > r1Start) {
        resultRanges.push([r1Start, r1Length - r2Length - r1End + r2End])
    }
    if (r2End < r1End) {
        resultRanges.push([r2End, r1Length - r2Length + r1Start - r2Start])
    }
    return resultRanges
}

export function part2(rawInput) {
    const [seeds, maps] = convert(rawInput)
    const pairs = splitToPairs(seeds)
    const result = maps.reduce((acc, cur) => {
        cur.sort((a, b) =>  a[1] - b[1])
        return recursive(acc, cur)
    }, pairs)
    return Math.min(...result.map(el => el[0]))
}

console.log({
    part1: part1(rawInput),
    part2: part2(rawInput),
    // part2Wrong: part2Wrong(readInput(__dirname, 'inputTest.txt')),
    // part2Test: part2(readInput(__dirname, 'inputTest.txt')),
})
