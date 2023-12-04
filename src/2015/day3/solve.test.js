import { expect, test } from 'vitest'
import { part1, part2 } from './solve'

test('part1 >', () => {
  expect(part1('>')).toBe(2)
})

test('part1 ^>v<', () => {
  expect(part1('^>v<')).toBe(4)
})

test('part1 ^v^v^v^v^v', () => {
  expect(part1('^v^v^v^v^v')).toBe(2)
})

test('part2 ^v', () => {
  expect(part2('^v')).toBe(3)
})

test('part2 ^>v<', () => {
  expect(part2('^>v<')).toBe(3)
})

test('part2 ^v^v^v^v^v', () => {
  expect(part2('^v^v^v^v^v')).toBe(11)
})