var uniqueOccurrences = function(arr) {
    const occurrenceCount = new Map();

    // Count occurrences of each value
    for (const num of arr) {
        occurrenceCount.set(num, (occurrenceCount.get(num) || 0) + 1);
    }

    const uniqueCounts = new Set(occurrenceCount.values());

    // Check if the counts are unique
    return uniqueCounts.size === occurrenceCount.size;
};

// Example usage:
console.log(uniqueOccurrences([1,2,2,1,1,3])); // Output: true
console.log(uniqueOccurrences([1,2]));           // Output: false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // Output: true
