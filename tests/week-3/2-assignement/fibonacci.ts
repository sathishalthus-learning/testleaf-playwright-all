//
// 
function fibonacci(n: number): number[] {
    let fibArray: number[] = [0,1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

// Example usage:
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3, 5]