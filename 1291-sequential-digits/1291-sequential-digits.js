/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
    const result = [];

    const generateSequential = (current, lastDigit) => {
        if (current > high) {
            return;
        }

        if (current >= low) {
            result.push(current);
        }

        if (lastDigit < 9) {
            generateSequential(current * 10 + lastDigit + 1, lastDigit + 1);
        }
    };

    for (let i = 1; i <= 9; i++) {
        generateSequential(i, i);
    }

    return result.sort((a, b) => a - b);
}

// Example usage:
const low1 = 100, high1 = 300;
console.log(sequentialDigits(low1, high1));  // Output: [123, 234]

const low2 = 1000, high2 = 13000;
console.log(sequentialDigits(low2, high2));  // Output: [1234, 2345, 3456, 4567, 5678, 6789, 12345]
