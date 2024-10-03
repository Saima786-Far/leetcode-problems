import java.util.Arrays;
import java.util.HashMap;

class Solution {
    public int[] arrayRankTransform(int[] arr) {
        // edge case : if the array is empty return an empty array
        if(arr.length == 0){
         return new int[0];
            }
        //step1: Create the copy of the original array, and sort it
        int[] sortedArr = arr.clone();
        Arrays.sort(sortedArr);
        
        //step2: Create a map to store the rank of each element
        HashMap<Integer, Integer> rankMap = new HashMap<>();
        int rank=1;
        
        //step3: Assigns ranks, skipping duplicates
        for(int num : sortedArr){
            if(!rankMap.containsKey(num)){
                rankMap.put(num ,rank);
                rank++;
            }
        }
        
        //step4: Create the result array by mapping  the original array
        int[] result =  new int[arr.length];
         for(int i =0; i<arr.length ; i++){
             result[i] = rankMap.get(arr[i]);
                
            }
        
        return result;
    } 
}
