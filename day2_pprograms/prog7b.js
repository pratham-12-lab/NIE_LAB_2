numbers = [2, 3, 5, 7, 9]
let nums = numbers // reference copy (shallow copy)
numbers[1] = 60
console.log(nums, numbers)

let another = [...numbers] //copies of the existing array
numbers[2] = 90
console.log(numbers, nums, another)