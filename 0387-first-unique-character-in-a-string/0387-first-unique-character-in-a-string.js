/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    // Create a hash map to store the count of each character
    const charCount = new Map();

    // Iterate through the string to count occurrences
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    // If no non-repeating character found, return -1
    return -1;
}
