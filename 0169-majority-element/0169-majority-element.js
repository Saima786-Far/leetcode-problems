/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let majorityElement = nums[0];
    let count = 1;

    // Perform the Boyer-Moore Voting Algorithm
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        } else if (count === 0) {
            majorityElement = nums[i];
            count++;
        } else {
            count--;
        }
    }

    // Verify if the found majority element indeed appears more than n/2 times
    count = 0;
    for (const num of nums) {
        if (num === majorityElement) {
            count++;
        }
    }
    if (count > Math.floor(nums.length / 2)) {
        return majorityElement;
    }

    // If no majority element found, return -1 (this case shouldn't happen due to the constraints)
    return -1;
}