class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int len1 = s1.length(), len2 = s2.length();
        // If s1 is longer than s2, it's impossible for s2 to contain a permutation of s1
        if (len1 > len2) return false;

        // Frequency arrays for characters in s1 and the current window in s2
        int[] s1Count = new int[26];
        int[] s2Count = new int[26];

        // Populate the frequency count for s1 and the first window in s2
        for (int i = 0; i < len1; i++) {
            s1Count[s1.charAt(i) - 'a']++;
            s2Count[s2.charAt(i) - 'a']++;
        }

        // Check if the first window matches
        if (matches(s1Count, s2Count)) return true;

        // Slide the window over s2, one character at a time
        for (int i = len1; i < len2; i++) {
            // Include the new character (end of window)
            s2Count[s2.charAt(i) - 'a']++;
            
            // Remove the old character (start of window)
            s2Count[s2.charAt(i - len1) - 'a']--;

            // Check if current window matches the character counts of s1
            if (matches(s1Count, s2Count)) return true;
        }

        return false;
    }

    // Helper function to compare two frequency arrays
    private boolean matches(int[] s1Count, int[] s2Count) {
        for (int i = 0; i < 26; i++) {
            if (s1Count[i] != s2Count[i]) {
                return false;
            }
        }
        return true;
        
    }
}