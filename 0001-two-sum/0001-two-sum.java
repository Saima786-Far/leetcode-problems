class Solution {
    public int[] twoSum(int[] nums, int target) {
        //Create a HashMap to store he number and its index
        HashMap<Integer, Integer> map = new HashMap<>();
        
        //Traverse the array
        for(int i = 0; i<nums.length; i++){
            int complement = target - nums[i];
            if(map.containsKey(complement)){
                return new int[] {map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[0];
        
    }
}