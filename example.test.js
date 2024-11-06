import * as main from './main.js';

test('capitalize first letter', () => {
  expect(main.capitalize('hello')).toBe('Hello');
});

test('reverse string', () => {
  expect(main.reverseString('hello')).toBe('olleh');
});

test('calculator add', () => {
  expect(main.calculator.add(3, 3)).toBe(6);
});

test('calculator subtract', () => {
  expect(main.calculator.subtract(3, 6)).toBe(-3);
});

test('calculator multiply', () => {
  expect(main.calculator.multiply(3, 3)).toBe(9);
});

test('calculator divide', () => {
  expect(main.calculator.divide(9, 3)).toBe(3);
});

test('calculator divide by 0', () => {
  expect(() => main.calculator.divide(3, 0)).toThrow('Cannot divide by 0');
});
