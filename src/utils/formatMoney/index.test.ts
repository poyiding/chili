import formatMoney from './index';

test('formatMoney', () => {
  expect(formatMoney(12)).toBe('12');
  expect(formatMoney(1234567)).toBe('1,234,567');
  expect(formatMoney(12345.67)).toBe('12,345.67');
});
