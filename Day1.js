/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let cnt = 0;
    for(let i=1;i<=n;i++) {
        if(n-i >= 0) {
            cnt += 1;
            n -= i;
        } else {
            break;
        }
    }
    return cnt;
};
