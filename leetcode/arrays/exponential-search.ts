interface SearchProps {
  nums: number[]
  target: number
}

function binarySearch({nums, target}: SearchProps) {
  let low = 0
  let high = nums.length
  let steps = 0

  while (low < high) {
    steps++
    const mid = Math.floor((low + high) / 2)
    
    if (nums[mid] === target) {
      console.log(`Elemento encontrado em ${steps} passos`)
      return mid
    } else if (nums[mid] < target) {
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

function exponentialSearch({nums, target}: SearchProps) {
  if (nums[0] === target) {
    return 0
  }

  //define o tamanho do array
  let lenght = nums.length

  //define o ponteiro inicial ja como o segundo item do array
  let i = 1

  //dobra o ponteiro ate encontrar o sub-array onde o elemento pode estar
  while (i < lenght && nums[i] < target) {
    i *= 2
  }

  //verifica se o elemento esta no indice i
  if (nums[i] === target) {
    return i
  }

  //chama a busca binaria no sub-array encontrado
  return binarySearch({
    nums: nums.slice(Math.floor(i / 2), Math.min(i, lenght - 1)),
    target,
  })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

const target = 33

const result = exponentialSearch({nums: arr, target})

console.log('Elemento encontrado no índice:', result)