numbers = [2, 3, 5, 7, 9]

let another = [...numbers] //copies of the existing array
numbers[2] = 90 // 5 is replaced with 90 in numbers list
console.log(numbers, another)

another = [...another, ...numbers]
console.log('\n')
console.log(numbers, another)