/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let q = [];
    let a = [] , b = [],b1 = [];
    if(root!==null) {
        a = [[root.val]];
        q.push(root);
    }
    while(q.length!==0) {
        let root1 = q.shift();
        if(root1.left!==null) {
            b.push(root1.left);
            b1.push(root1.left.val);
        }
        if(root1.right!==null) {
            b.push(root1.right);
            b1.push(root1.right.val);
        }
        if(q.length===0 && b.length>0) {
            a.push(b1);
            q = b;
            b = [];
            b1 = [];
        }
    }
    console.log(a);
    a = a.reverse();
    return a;
};
