/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.split(' ');
    a = a.map(item => item!==' '?item:'');
    a.reverse();
    return a.join(' ').replace(/\s+/g, ' ').trim();
};
