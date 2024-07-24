//There are n recursive calls in total, making the time complexity O(n)
function sum_to_n_a(n: number): number {
    if (!Number.isInteger(n) || n <= 0) return 0;
    if (n <= 1) return n;
    return (n += sum_to_n_a(n - 1));
}

//The function calculates the result using a direct arithmetic formula. The number of operations does not depend on
//n, so it is constant time O(n)
function sum_to_n_b(n: number): number {
    if (!Number.isInteger(n) || n <= 0) return 0;
    return (n * (n + 1)) / 2;
}

//Array.from creates an array of length n, which takes O(n) time.
//The reduce function iterates over the array once, summing the values, which also takes O(n) time.
//Therefore, the overall time complexity is O(n).
function sum_to_n_c(n: number): number {
    if (!Number.isInteger(n) || n <= 0) return 0;
    return Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, value) => acc + value,
        0
    );
}
