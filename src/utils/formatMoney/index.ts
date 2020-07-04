/**
 * 12       --> "12.00"
 * 1234567  --> "1,234,567.00"
 * 12345.67 --> "12,345.67"
 */

type moneyType = number | string;

export default function formatMoney(money: moneyType) {
  const numbered = Number(money);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(numbered)) {
    console.error(`${money} is not a number`);
  }

  if (numbered) {
    // 有小数点，保留两位小数，用","分千分位
    if (`${money}`.includes('.')) {
      numbered.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    return `${numbered}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 不保留2位数了
  }
  return money;
}
