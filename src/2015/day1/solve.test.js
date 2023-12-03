import { expect, test } from 'vitest'
import { part1, part2 } from './solve'

test('part1 (())', () => {
  expect(part1('(())')).toBe(0)
})

test('part1 ()()', () => {
  expect(part1('()()')).toBe(0)
})

test('part1 (((', () => {
  expect(part1('(((')).toBe(3)
})

test('part1 (()(()(', () => {
  expect(part1('(()(()(')).toBe(3)
})

test('part1 ))(((((', () => {
  expect(part1('))(((((')).toBe(3)
})

test('part1 ())', () => {
  expect(part1('())')).toBe(-1)
})

test('part1 ))(', () => {
  expect(part1('))(')).toBe(-1)
})

test('part1 )))', () => {
  expect(part1(')))')).toBe(-3)
})

test('part1 )())())', () => {
  expect(part1(')())())')).toBe(-3)
})

test('part2 )', () => {
  expect(part2(')')).toBe(1)
})

test('part1 ()())', () => {
  expect(part2('()())')).toBe(5)
})

test('part2 ())()', () => {
  expect(part2('())()')).toBe(3)
})