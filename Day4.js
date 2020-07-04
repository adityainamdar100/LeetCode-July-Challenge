/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let i2=0,i3=0,i5=0;
    let mem = [];
    mem.push(1);
    let i=1;
    while(i<n){
        mem.push(Math.min(2*mem[i2],3*mem[i3],5*mem[i5]));
        if(mem[i]==mem[i2]*2)
            i2++;
        if(mem[i]==mem[i3]*3)
            i3++;
        if(mem[i]==mem[i5]*5)
            i5++;
        i++;
    }
    return mem[n-1];
};
