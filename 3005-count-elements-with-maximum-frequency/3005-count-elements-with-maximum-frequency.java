import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxFrequencyElements(int[] nums) {
        // Step 1: Count the frequency of each element
        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        // Step 2: Find the maximum frequency
        int maxFrequency = 0;
        for (int freq : frequency.values()) {
            maxFrequency = Math.max(maxFrequency, freq);
        }

        // Step 3: Count elements with maximum frequency
        int countMaxElements = 0;
        for (int num : frequency.keySet()) {
            if (frequency.get(num) == maxFrequency) {
                countMaxElements += maxFrequency;
            }
        }

        // Step 4: Return the count
        return countMaxElements;
    }
}
