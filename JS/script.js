
let stopNumber = prompt("Enter The Number")

let numbers = [0, 1];

for (i = numbers.length; i < stopNumber; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2]
}

console.log(numbers);