function missingNumber(nums) {
  let x = 0
  for (num of nums) {
    x ^= num
  }
  for (let i = 0; i <= nums.length; i++) {
    x ^= i
  }
  return x
}

const nums = [3, 0, 1]
console.log(missingNumber(nums)) // 2