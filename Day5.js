/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let extra = "";
    let size = -1;
    if(x.length>y.length) {
        // size = y.length;
        let e = x.length - y.length;
        for(let i=0;i<e;i++) {
            extra += '0';
        }
        for(let i=0;i<y.length;i++) {
            extra += y[i];
        }
        y = extra;
    } else if(x.length<y.length) {
        // size = y.length;
        let e = y.length - x.length;
        for(let i=0;i<e;i++) {
            extra += '0';
        }
        for(let i=0;i<x.length;i++) {
            extra += x[i];
        }
        x = extra;
    }
    size = x.length;
    let ans = 0;
    for(let i = size-1; i>=0; i--) {
        if(x[i]!==y[i])
            ans += 1;
    }
    return ans;
};
