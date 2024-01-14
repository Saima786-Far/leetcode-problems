/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */function canBeClose(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    // Count frequencies of characters in both strings
    const count1 = {};
    const count2 = {};
    for (const char of word1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    for (const char of word2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    // Check if the sets of frequencies are the same
    if (Object.values(count1).sort().toString() !== Object.values(count2).sort().toString()) {
        return false;
    }

    // Check if one set of characters can be transformed into the other set
    const chars1 = new Set(word1);
    const chars2 = new Set(word2);
    return [...chars1].sort().toString() === [...chars2].sort().toString() ||
           [...chars1].every(char => chars2.has(char));
}

function closeStrings(word1, word2) {
    return canBeClose(word1, word2);
}

// Example usage:
console.log(closeStrings("abc", "bca"));       // Output: true
console.log(closeStrings("a", "aa"));          // Output: false
console.log(closeStrings("cabbba", "abbccc")); // Output: true
