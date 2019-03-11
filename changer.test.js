const makeChange = require('./changer.js');

test('one quarter', () => {
  const result = makeChange(25);

  expect(result).toEqual([25]);
});
test('multiple quarters', () => {
  const result = makeChange(50);

  expect(result).toEqual([25, 25]);
});
test('one dime', () => {
  const result = makeChange(10);

  expect(result).toEqual([10]);
});
test('multiple dimes', () => {
  const result = makeChange(20);

  expect(result).toEqual([10, 10]);
});
test('small complex amount', () => {
  const result = makeChange(7);

  expect(result).toEqual([5, 1, 1]);
});
test('large complex amount', () => {
  const result = makeChange(68);

  expect(result).toEqual([25, 25, 10, 5, 1, 1, 1]);
});
