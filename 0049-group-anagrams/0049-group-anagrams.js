/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const anagramsMap = new Map();

    // Iterate through the array of strings
    for (const str of strs) {
        // Sort the characters of the string
        const sortedStr = str.split('').sort().join('');

        // If the sorted string exists as a key in the hash map, push the original string to its value array
        if (anagramsMap.has(sortedStr)) {
            anagramsMap.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new key with the sorted string and set its value as an array containing the original string
            anagramsMap.set(sortedStr, [str]);
        }
    }

    // Convert the values of the hash map to an array of arrays
    return Array.from(anagramsMap.values());
}
