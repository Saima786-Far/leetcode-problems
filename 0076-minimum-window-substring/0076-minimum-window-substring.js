/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    const charCount = new Map();
    let requiredChars = 0;

    // Count the occurrences of characters in t
    for (const char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
        requiredChars++;
    }

    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minWindowStart = 0;

    while (right < s.length) {
        if (charCount.has(s[right]) && charCount.get(s[right]) > 0) {
            requiredChars--;
        }

        charCount.set(s[right], (charCount.get(s[right]) || 0) - 1);
        right++;

        while (requiredChars === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minWindowStart = left;
            }

            charCount.set(s[left], (charCount.get(s[left]) || 0) + 1);

            if (charCount.get(s[left]) > 0) {
                requiredChars++;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substr(minWindowStart, minLen);
}