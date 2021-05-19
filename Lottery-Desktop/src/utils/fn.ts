export const myFn = {
  formatDecimal(num: any, dec = 2) {
    return (Math.round(Number(num) * 100) / 100).toFixed(dec);
  },
};