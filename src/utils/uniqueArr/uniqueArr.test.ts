import uniqueArr from './index';

test('uniqueArr', () => {
  const { uniqueBy } = uniqueArr;
  expect(uniqueArr([1, 3, '1', '1', 2, 5, 2])).toEqual([1, 3, '1', 2, 5]);
  expect(uniqueBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')).toEqual([
    { x: 1 },
    { x: 2 },
  ]);
});
