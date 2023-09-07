// @ts-nocheck
//             day1 day2 day3 ...
const test1 = [100, 200, 50, 30, 150, 250];
const test2 = [150, 80, 60, 50, 30];

/**
 * @author Charles
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  prices.forEach(price => {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  });

  return maxProfit;
}

console.log(maxProfit(test1));
console.log(maxProfit(test2));
