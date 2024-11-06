import * as main from './main.js';

test('capitalize first letter', () => {
  expect(main.capitalize('hello')).toBe('Hello');
});
