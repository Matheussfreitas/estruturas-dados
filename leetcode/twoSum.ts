function twoSum(nums: number[], target: number) {
  const numMap = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const complement = target - currentNumber;

    if(numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(currentNumber, i);
  }
  return [];
}