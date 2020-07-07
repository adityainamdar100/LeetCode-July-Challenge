/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let perimeter = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(grid[i][j]===1) {
                perimeter += 4;
                if((i-1>=0) && grid[i-1][j]===1)
                    perimeter -= 1;
                if((i+1<n) && grid[i+1][j]===1)
                    perimeter -= 1;
                if((j-1>=0) && grid[i][j-1]===1)
                    perimeter -= 1;
                if((j+1<m) && grid[i][j+1]===1)
                    perimeter -= 1;
            }
        }
    }
    return perimeter;
};
