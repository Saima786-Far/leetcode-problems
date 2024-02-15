/**
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
    nums.sort((a, b) => a - b); // Sort the array in non-decreasing order
    let previousElementsSum = 0;
    let ans = -1;
    for (let i = 0; i < nums.length; i++) {
        if (i >= 2 && nums[i] < previousElementsSum) {
            ans = nums[i] + previousElementsSum;
        }
        previousElementsSum += nums[i];
    }
    return ans;
}