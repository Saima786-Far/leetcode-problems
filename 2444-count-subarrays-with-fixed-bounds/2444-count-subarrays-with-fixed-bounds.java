class Solution {
      public long countSubarrays(int[] nums, int minK, int maxK) {
        long totalCount = 0; // Variable to store the total count of subarrays
        int lastMinIndex = -1; // Index of the last occurrence of minK
        int lastMaxIndex = -1; // Index of the last occurrence of maxK
        int lastInvalidIndex = -1; // Index of the last element not in [minK, maxK]

        // Iterate over each element in the array
        for (int currentIndex = 0; currentIndex < nums.length; ++currentIndex) {
            // If the current element is outside of the [minK, maxK] range, update lastInvalidIndex
            if (nums[currentIndex] < minK || nums[currentIndex] > maxK) {
                lastInvalidIndex = currentIndex;
            }

            // If the current element is equal to minK, update lastMinIndex
            if (nums[currentIndex] == minK) {
                lastMinIndex = currentIndex;
            }

            // If the current element is equal to maxK, update lastMaxIndex
            if (nums[currentIndex] == maxK) {
                lastMaxIndex = currentIndex;
            }

            // Calculate the number of valid subarrays ending at the current index
            // It is the distance between the last invalid index and the minimum of the last occurrences of minK and maxK
            totalCount += Math.max(0, Math.min(lastMinIndex, lastMaxIndex) - lastInvalidIndex);
        }

        return totalCount; // Return the total count of valid subarrays
    }
}  