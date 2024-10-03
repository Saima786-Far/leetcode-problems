class Solution {
    public int minSubarray(int[] nums, int p) {
        //Step 1: Calculate the total sum of the array
        long totalSum = 0;
        for(int num :nums){
            totalSum += num;
        }
        //Step 2: Find the remainder of the total sum when divided by p
        long target = totalSum % p;
        if(target == 0){
            return 0; // the total sum is already divisible by p
        }
        
        //step 3: Use a hashmap to store prefix sum mod p
        HashMap<Long , Integer> prefixModMap= new HashMap<>();
        prefixModMap.put(0L,-1);
        long prefixSum = 0;
        int minLength= nums.length;
        for(int i=0; i<nums.length; i++){
            prefixSum += nums[i];
            long currentMod = prefixSum % p;
            
            //Find if there is a previous prefix the sum that can form the target
            long requiredMod = (currentMod - target + p) % p;
             if (prefixModMap.containsKey(requiredMod)) {
                int subarrayLength = i - prefixModMap.get(requiredMod);
                minLength = Math.min(minLength, subarrayLength);
            }
            prefixModMap.put(currentMod, i);
               
        }
        return minLength == nums.length ? -1: minLength;
        
    }
}