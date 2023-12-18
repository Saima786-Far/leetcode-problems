/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let largest =0, secondLargest =0;
    let smallest = Number.MAX_SAFE_INTEGER, secondSmallest = Number.MAX_SAFEINTEGER;
    for (const num of nums){
        if(num < smallest){
            secondSmallest = smallest;
            smallest = num;
        }
        else if (num < secondSmallest){
            secondSmallest = num;
        }
    
    if ( num > largest){
        secondLargest = largest;
        largest = num;
    }
    else if(num >secondLargest){
        secondLargest = num;
    }
        
    }

 return( largest * secondLargest) -(smallest * secondSmallest )

};