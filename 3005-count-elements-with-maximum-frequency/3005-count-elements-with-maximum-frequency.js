/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
    // Step 1: Count the frequency of each element
    const frequency = new Map();
    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    // Step 2: Find the maximum frequency
    let maxFrequency = 0;
    for (const freq of frequency.values()) {
        maxFrequency = Math.max(maxFrequency, freq);
    }

    // Step 3: Count elements with maximum frequency
    let countMaxElements = 0;
    for (const [num, freq] of frequency.entries()) {
        if (freq === maxFrequency) {
            countMaxElements += maxFrequency;
        }
    }

    // Step 4: Return the count
    return countMaxElements;
}

// Example usage
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // Output: 4
