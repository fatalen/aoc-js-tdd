import { expect, test } from 'vitest'
import { getDigits, getDigitsWithWords } from './solve'

test('getDigits 1abc2', () => {
  expect(getDigits('1abc2')).toBe(12)
})

test('getDigits pqr3stu8vwx', () => {
  expect(getDigits('pqr3stu8vwx')).toBe(38)
})

test('getDigits a1b2c3d4e5f', () => {
  expect(getDigits('a1b2c3d4e5f')).toBe(15)
})

test('getDigits treb7uchet', () => {
  expect(getDigits('treb7uchet')).toBe(77)
})

test('getDigitsWithWords two1nine', () => {
  expect(getDigitsWithWords('two1nine')).toBe(29)
})

test('getDigitsWithWords eightwothree', () => {
  expect(getDigitsWithWords('eightwothree')).toBe(83)
})

test('getDigitsWithWords abcone2threexyz', () => {
  expect(getDigitsWithWords('abcone2threexyz')).toBe(13)
})

test('getDigitsWithWords xtwone3four', () => {
  expect(getDigitsWithWords('xtwone3four')).toBe(24)
})

test('getDigitsWithWords 4nineeightseven2', () => {
  expect(getDigitsWithWords('4nineeightseven2')).toBe(42)
})

test('getDigitsWithWords zoneight234', () => {
  expect(getDigitsWithWords('zoneight234')).toBe(14)
})

test('getDigitsWithWords 7pqrstsixteen', () => {
  expect(getDigitsWithWords('7pqrstsixteen')).toBe(76)
})

test('getDigitsWithWords on7pqrstsixteen', () => {
  expect(getDigitsWithWords('on7pqrstsixteen')).toBe(76)
})