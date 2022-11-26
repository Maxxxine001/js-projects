/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    

    let difference = prices[1] - min
    let min = prices[0]

    if( prices.length <= 1){
        return 0
    }

    for (let index = 2; index <= prices.length - 1; index++) {
        min = Math.min(min, prices[index - 1])
        difference = Math.max(difference, prices[index] - min)
    }
   
    if (difference < 0) {
        return 0
    }

    return difference;
};

maxProfit([7,1,5,3,6,4])