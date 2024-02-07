/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
    // Step 1: Create a map to store character frequencies
    const charFreqMap = new Map();
    for (const char of s) {
        charFreqMap.set(char, (charFreqMap.get(char) || 0) + 1);
    }
    
    // Step 2: Sort the characters based on their frequencies
    const sortedChars = Array.from(charFreqMap.keys()).sort((a, b) => charFreqMap.get(b) - charFreqMap.get(a));
    
    // Step 3: Construct the sorted string
    let sortedString = '';
    for (const char of sortedChars) {
        const frequency = charFreqMap.get(char);
        sortedString += char.repeat(frequency);
    }
    
    return sortedString;
}