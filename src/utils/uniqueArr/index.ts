type obj = {
  [key: string]: string | number | boolean | undefined;
};

const uniqueArr = (array: Array<any>) =>
  array != null && array.length ? Array.from(new Set(array)) : [];

uniqueArr.uniqueBy = (arr: obj[], key: string) => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};

export default uniqueArr;
