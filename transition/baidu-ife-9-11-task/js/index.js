let nums = [-3,4,3,90]
let target = 0;
var twoSum = function(nums, target) {
    for(let i = 0 ; i< nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target && nums[i] != nums[j])
                return [i,j]
        }
    }
};

console.log(twoSum(nums,target));
