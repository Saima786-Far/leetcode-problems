/**
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
    if (nums.length === 0) return [];
    
    nums.sort((a, b) => a - b);
    const dp = new Array(nums.length).fill(1);
    let maxSize = 1;
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] > maxSize) {
            maxSize = dp[i];
            maxIndex = i;
        }
    }

    const result = [];
    let currSize = maxSize;
    let currNum = nums[maxIndex];
    for (let i = maxIndex; i >= 0; i--) {
        if (currSize === dp[i] && currNum % nums[i] === 0) {
            result.unshift(nums[i]);
            currSize--;
            currNum = nums[i];
        }
    }

    return result;
}