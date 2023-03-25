/* 
  1.对一个整数数组,返回两个元素的索引(如果有多对满足要求只取让较小的索引取到最小值的那一对)，
  使这两个元素相加为34;如果不存在合适的索引，则返回该数组的前两个元素;如果该数组
  的元素少于两个，则返回其本身
*/
function anwer() {
    
}
function twoSum(nums,target) {
    for(let i = 0;i<nums.length;i++){
        for(let j = j+1;j<nums.length;j++){
            if (nums[i]+nums[j]===target) {
                return [i,j]
            }
        }
    }
    
}