/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1;i>=0;i--) {
        let num  = digits[i] + carry;
        let carry1 = num;
        num %= 10;
        digits[i] = num;
        carry = parseInt(carry1/10)
    }
    if(carry!==0)
        digits.unshift(carry);
    return digits;
};
