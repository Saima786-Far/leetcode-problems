/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // Define a helper function to check if a string is a palindrome
    function isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }
    
    // Iterate through the array of words
    for (const word of words) {
        // Check if the current word is a palindrome
        if (isPalindrome(word)) {
            // If it is a palindrome, return it
            return word;
        }
    }
    
    // If no palindrome is found, return an empty string
    return "";
};