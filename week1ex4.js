function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Invalid operation';
    }
}

console.log(calculate(10, 5, 'add'));        // Output: 15
console.log(calculate(10, 5, 'subtract'));   // Output: 5
console.log(calculate(10, 5, 'multiply'));   // Output: 50
console.log(calculate(10, 5, 'divide'));     // Output: 2
