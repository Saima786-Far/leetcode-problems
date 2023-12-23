var isPathCrossing = function(path) {
    const moves = {
        'N': [0, 1],
        'S': [0, -1],
        'W': [-1, 0],
        'E': [1, 0],
    };

    const visited = new Set();
    visited.add('0,0');

    let x = 0;
    let y = 0;

    for (const c of path) {
        const [dx, dy] = moves[c];
        x += dx;
        y += dy;

        const coordinate = `${x},${y}`;
        if (visited.has(coordinate)) {
            return true;
        }

        visited.add(coordinate);
    }

    return false;
};

// Example usage:
console.log(isPathCrossing("NES")); // Output: false
