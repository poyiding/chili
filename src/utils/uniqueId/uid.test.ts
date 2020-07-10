import uniqueId from './index';

test('uniqueId', () => {
  const arr = new Array(10000);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = uniqueId();
  }
  const len = Array.from(new Set(arr)).length;
  expect(arr.length).toBe(len);
});
