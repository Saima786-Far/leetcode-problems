/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
    // Step 1: Count the frequency of each element using a hashmap
    const freqMap = new Map();
    for (const num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Sort the frequency counts
    const sortedFreq = Array.from(freqMap.values()).sort((a, b) => a - b);

    // Step 3: Remove elements with the lowest frequency until k becomes zero
    let uniqueIntegers = sortedFreq.length;
    let remainingRemovals = k;
    for (const freq of sortedFreq) {
        if (remainingRemovals >= freq) {
            remainingRemovals -= freq;
            uniqueIntegers--;
        } else {
            break;
        }
    }

    return uniqueIntegers;
}