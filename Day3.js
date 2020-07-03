/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    let cells1 = [...cells];
    cells[0] = 0;
    for(let i=1;i<=6;i++) {
        if(cells1[i-1]===cells1[i+1])
            cells[i] = 1;
        else
            cells[i] = 0;
    }
    cells[7] = 0;
    cells1 = [...cells];
    let max1 = 2 * cells.length - 2
    N = N % max1 === 0 ? max1 : N % max1
    if(N===1)
        return cells;
    for(let n=1;n<N;n++) {
        for(let i=1;i<=6;i++) {
        if(cells1[i-1]===cells1[i+1])
            cells[i] = 1;
        else
            cells[i] = 0;
        }
        cells1 = [...cells];
    }
    return cells;
};
