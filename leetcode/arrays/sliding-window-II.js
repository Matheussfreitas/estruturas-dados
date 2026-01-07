/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
      // se o set já contiver o numero, retorna true
        if (set.has(nums[i])) {
            return true
        }

        // adiciona o numero ao set
        set.add(nums[i])

        // verifica se o tamanho do set é maior que k
        if (set.size > k) {
            set.delete(nums[i - k])
        }
    }

    return false
};

let nums = [1,0,1,1]

let k = 1

console.log(containsNearbyDuplicate(nums, k))