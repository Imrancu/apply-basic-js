function factorial(num) {
    let factorial = 1
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    return factorial
}
let result = factorial(10)
console.log(result);