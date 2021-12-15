import add from '../test_component';

test('1 + 1 = 2', () => {
  expect(add(1, 1)).toBe(2);
});

test('1 + 2 = 4', () => {
  expect(add(1, 2)).toBe(4);
});
