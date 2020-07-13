/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function checkDFS(p,q){
    if(p===null && q===null)
        return;
    if(p===null || q===null)
        return false;
    if(p.val!==q.val)
        return false;
    if(checkDFS(p.left,q.left)===false)
        return false;
    if(checkDFS(p.right,q.right)===false)
        return false;
}
var isSameTree = function(p, q) {
    return checkDFS(p,q)===false?false:true;;
};
