import { expect, test } from 'vitest'
import { getDimensions, getArea, getRibbon } from './solve'

test('getDimensions 2x3x4', () => {
  expect(getDimensions('2x3x4')).toEqual({ l: 2, w: 3, h: 4 })
})

test('getDimensions 1x1x10', () => {
  expect(getDimensions('1x1x10')).toEqual({ l: 1, w: 1, h: 10 })
})

test('getArea 2x3x4', () => {
  expect(getArea({ l: 2, w: 3, h: 4 })).toBe(58)
})

test('getArea 1x1x10', () => {
  expect(getArea({ l: 1, w: 1, h: 10 })).toBe(43)
})

test('getRibbon 2x3x4', () => {
  expect(getRibbon({ l: 2, w: 3, h: 4 })).toBe(34)
})

test('getRibbon 1x1x10', () => {
  expect(getRibbon({ l: 1, w: 1, h: 10 })).toBe(14)
})
