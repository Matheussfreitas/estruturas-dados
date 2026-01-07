interface binarySearchProps {
  nums: number[]
  elemento: number
}

export function binarySearch({nums, elemento}: binarySearchProps) {
  let low = 0
  let high = nums.length
  let steps = 0

  while (low < high) {
    steps++
    const mid = Math.floor((low + high) / 2)
    
    if (nums[mid] === elemento) {
      console.log(`Elemento encontrado em ${steps} passos`)
      return mid
    } else if (nums[mid] < elemento) {
      // define o ponteiro sendo o primeiro item da metade direita
      low = mid + 1
    } else {
      // define o ponteiro sendo o último item da metade esquerda
      high = mid
    }
  }
  console.log(`Elemento não encontrado em ${steps} passos`)
  return -1
}