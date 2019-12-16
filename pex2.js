function collatz(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return 3*n + 1;
    }
}

let a = 2;
while (a !== 1) {
    console.log(a);
    a = collatz(a);
}