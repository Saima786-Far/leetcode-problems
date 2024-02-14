/**
 * @param {number[]} nums
 * @return {number[]}
 */
   function rearrangeArray(nums) {
    const ans = new Array(nums.length).fill(0); // Initialize array with zeros
    let i = 0, j = 1;
    nums.forEach(num => {
        if (num > 0) {
            ans[i] = num;
            i += 2;
        } else {
            ans[j] = num;
            j += 2;
        }
    });
    return ans;
}