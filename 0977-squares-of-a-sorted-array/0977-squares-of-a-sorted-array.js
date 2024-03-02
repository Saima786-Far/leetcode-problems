/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let left = 0, right = nums.length -1;
    for(let i = nums.length -1; i>=0 ; i--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            result[i] = nums[left]** 2;
            left++;
        }else{
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result;
};
