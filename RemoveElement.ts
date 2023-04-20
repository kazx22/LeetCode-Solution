function searchInsert(nums: number[], target: number): number {
  let res: number;
  if (nums[0] == target) res = 0;
  else if (nums[nums.length - 1] == target) res = nums.length - 1;
  else if (nums[nums.length - 1] < target) return nums.length + 1;
  else {
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] == target) {
        res = i;
        break;
      }
      if (nums[i] < target) {
        res = i - 1;
        break;
      }
    }
  }
  return res;
}
