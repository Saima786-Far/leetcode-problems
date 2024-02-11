/**
 * @param {number[][]} grid
 * @return {number}
 */
function cherryPickup(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Initialize a 3D dp array to store the maximum cherries collected at each position for both robots
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0).map(() => new Array(cols).fill(-Infinity)));

    // Initialize the base case for the bottom row
    for (let j1 = 0; j1 < cols; j1++) {
        for (let j2 = 0; j2 < cols; j2++) {
            if (j1 === j2) {
                dp[rows - 1][j1][j2] = grid[rows - 1][j1];
            } else {
                dp[rows - 1][j1][j2] = grid[rows - 1][j1] + grid[rows - 1][j2];
            }
        }
    }

    // Iterate from the second last row to the first row
    for (let i = rows - 2; i >= 0; i--) {
        for (let j1 = 0; j1 < cols; j1++) {
            for (let j2 = 0; j2 < cols; j2++) {
                let maxCherries = -Infinity;

                // Iterate through the next possible positions for both robots
                for (let nj1 = j1 - 1; nj1 <= j1 + 1; nj1++) {
                    for (let nj2 = j2 - 1; nj2 <= j2 + 1; nj2++) {
                        if (nj1 >= 0 && nj1 < cols && nj2 >= 0 && nj2 < cols) {
                            maxCherries = Math.max(maxCherries, dp[i + 1][nj1][nj2]);
                        }
                    }
                }

                // Update the maximum cherries collected at the current position for both robots
                dp[i][j1][j2] = grid[i][j1] + (j1 === j2 ? 0 : grid[i][j2]) + maxCherries;
            }
        }
    }

    // Return the maximum cherries collected by both robots starting from the top-left corner
    return dp[0][0][cols - 1];
}