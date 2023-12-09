import { expect, test } from 'vitest'
import { readInput } from '../../common/readInput'
import { getRangeWithOffset, getRangesMapValue, part1, getSeedsFromRange, splitToPairs, recursive, subtractIntersection, getIntersection } from './solve'

test('getRangeWithOffset [50, 98, 2]', () => {
  expect(getRangeWithOffset([50, 98, 2])).toEqual([98, 99, -48])
})

test('getRangeWithOffset [52, 50, 48]', () => {
  expect(getRangeWithOffset([52, 50, 48])).toEqual([50, 97, 2])
})

test('getRangeWithOffset [2, 2, 1000]', () => {
  expect(getRangeWithOffset([2, 2, 1000])).toEqual([2, 1001, 0])
})

test('getRangesMapValue 79, [50, 98, 2]', () => {
  expect(getRangesMapValue(79, [[50, 98, 2]])).toBe(81)
})

test('getRangesMapValue 1, [50, 98, 2]', () => {
  expect(getRangesMapValue(1, [[50, 98, 2]])).toBe(1)
})

test('getRangesMapValue 101, [50, 98, 2]', () => {
  expect(getRangesMapValue(101, [[50, 98, 2]])).toBe(101)
})

test('getRangesMapValue 1, [50, 98, 2] [1, 10, 2]', () => {
  expect(getRangesMapValue(1, [[50, 98, 2], [1, 10, 2]])).toBe(3)
})

test('part1 testInput', () => {
  const rawInput = readInput(__dirname, 'inputTest.txt')
  expect(part1(rawInput)).toBe(35)
})

test('getSeedsFromRange 1, 1', () => {
  expect(getSeedsFromRange([1, 1])).toEqual([1])
})

test('getSeedsFromRange 1, 2', () => {
  expect(getSeedsFromRange([1, 2])).toEqual([1, 2])
})

test('getSeedsFromRange 14, 6', () => {
  expect(getSeedsFromRange([14, 6])).toEqual([14, 15, 16, 17, 18, 19])
})

test('splitToPairs 1, 2, 3, 4', () => {
  expect(splitToPairs([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]])
})

test('splitToPairs 1, 2, 3, 4, 1, 2, 3, 4', () => {
  expect(splitToPairs([1, 2, 3, 4, 1, 2, 3, 4])).toEqual([[1, 2], [3, 4], [1, 2], [3, 4]])
})


test('recursive1', () => {
  expect(recursive([ [ 45, 2 ] ], [ [ 1, 0, 69 ] ])).toEqual([ [ 46, 2 ] ])
})

test('recursive2', () => {
  expect(recursive([ [ 45, 2 ] ], [ [ 0, 69, 1 ], [ 1, 0, 69 ] ])).toEqual([ [ 46, 2 ] ])
})

test('recursive3', () => {
  expect(recursive([ [ 45, 1 ], [ 71, 10 ] ], [ [ 0, 69, 1 ], [ 1, 0, 69 ] ])).toEqual([ [ 71, 10 ], [ 46, 1 ] ])
})

test('recursive4', () => {
  expect(recursive([ [ 1, 2 ], [ 11, 2 ] ], [ [ 1, 5, 5 ] ])).toEqual([ [ 1, 2 ], [ 11, 2 ] ])
})

test('recursive5', () => {
  expect(recursive([ [ 1, 20 ] ], [ [ 15, 5, 5 ] ])).toEqual([ [ 15, 5 ], [ 1, 4 ], [ 10, 11 ] ])
})

test('recursive6', () => {
  expect(recursive([ [ 1, 20 ], [ 20, 20 ] ], [ [ 15, 5, 5 ] ])).toEqual([ [ 15, 5 ], [ 20, 20 ], [ 1, 4 ], [ 10, 11 ] ])
})

test('recursive7', () => {
  expect(recursive([ [ 1, 20 ] ], [ [ 16, 11, 10 ] ])).toEqual([ [16, 10], [1, 10] ])
})

test('recursive8', () => {
  expect(recursive([ [ 11, 30 ] ], [ [ 16, 11, 10 ] ])).toEqual([ [16, 10], [21, 20] ])
})

test('getIntersection-1', () => {
  expect(getIntersection([ 2, 10 ], [1, 5] )).toEqual([2, 4])
})

test('getIntersection-2', () => {
  expect(getIntersection([1, 5], [ 2, 10 ] )).toEqual([2, 4])
})

test('getIntersection-3', () => {
  expect(getIntersection([ 2, 10 ], [22, 5] )).toEqual(null)
})

test('getIntersection-4', () => {
  expect(getIntersection([4, 5], [ 2, 10 ] )).toEqual([4, 5])
})

test('getIntersection-5', () => {
  expect(getIntersection([ 2, 10 ], [4, 5] )).toEqual([4, 5])
})

test('subtractIntersection-1', () => {
  expect(subtractIntersection([ 1, 10 ], [1, 10] )).toEqual([])
})

test('subtractIntersection-2', () => {
  expect(subtractIntersection([ 1, 10 ], [1, 5] )).toEqual([[6, 5]])
})

test('subtractIntersection-3', () => {
  expect(subtractIntersection([ 1, 10 ], [6, 5] )).toEqual([[1, 5]])
})

test('subtractIntersection-4', () => {
  expect(subtractIntersection([ 1, 10 ], [6, 2] )).toEqual([[1, 5], [8, 3]])
})

test('subtractIntersection-5', () => {
  expect(subtractIntersection([ 11, 100 ], [21, 10] )).toEqual([[11, 10], [31, 80]])
})

