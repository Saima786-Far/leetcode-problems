import java.util.Arrays;

class Solution {
    public long dividePlayers(int[] skill) {
        // Sort the array to facilitate pairing
        Arrays.sort(skill);
        
        // Initialize the total chemistry
        long totalChemistry = 0;
        
        // The target skill sum for each pair
        int targetSum = skill[0] + skill[skill.length - 1];
        
        // Use two pointers to form the teams
        int left = 0;
        int right = skill.length - 1;
        
        while (left < right) {
            // Check if the sum of the current pair matches the target
            if (skill[left] + skill[right] != targetSum) {
                return -1;  // If not, return -1 as it's impossible to form teams
            }
            
            // Add the chemistry of the current pair to the total chemistry
            totalChemistry += (long) skill[left] * skill[right];
            
            // Move the pointers inward
            left++;
            right--;
        }
        
        // Return the total chemistry if all pairs are valid
        return totalChemistry;
    }
}
