/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    var firstlargest = nums[0];
    var secondlargest = nums[0];

    for(let n of nums)
        {
            if(n > firstlargest)
                {
                    secondlargest = firstlargest;
                    firstlargest = n;
                }
            if((n < firstlargest) &&(n > secondlargest))
               {
                    secondlargest = n;
               }
        }
    return secondlargest;
}

var nums = [1,2,3,6,6,5];
getSecondLargest(nums);
