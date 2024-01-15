var findWinners = function(matches) {
    const losses = new Map();
    const playedMatches = new Set();

    for (const [winner, loser] of matches) {
        // Mark both players as having played at least one match
        playedMatches.add(winner);
        playedMatches.add(loser);

        // Increment the loss count for the loser
        losses.set(loser, (losses.get(loser) || 0) + 1);
    }

    const zeroLossPlayers = [];
    const oneLossPlayers = [];

    // Iterate through the players and categorize them
    playedMatches.forEach(player => {
        const lossCount = losses.get(player) || 0;

        if (lossCount === 0) {
            // Player has not lost any matches
            zeroLossPlayers.push(player);
        } else if (lossCount === 1) {
            // Player has lost exactly one match
            oneLossPlayers.push(player);
        }
    });

    // Sort the player IDs
    zeroLossPlayers.sort((a, b) => a - b);
    oneLossPlayers.sort((a, b) => a - b);

    return [zeroLossPlayers, oneLossPlayers];
};

// Example usage:
const matches1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches1)); // Output: [[1,2,10],[4,5,7,8]]

const matches2 = [[2,3],[1,3],[5,4],[6,4]];
console.log(findWinners(matches2)); // Output: [[1,2,5,6],[]]
