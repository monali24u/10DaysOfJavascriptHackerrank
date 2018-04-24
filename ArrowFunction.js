function modifyArray(nums) {

    var newArry = nums.map(a => a = ((a%2)==0) ? a*2 : a*3);
    return newArry;

}
