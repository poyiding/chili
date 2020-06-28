import getUrlParams from './index';

test('getUrlParams', () => {
  expect(getUrlParams('/api/test?uid=123&uname=coco')).toEqual({
    uid: '123',
    uname: 'coco',
  });
});
