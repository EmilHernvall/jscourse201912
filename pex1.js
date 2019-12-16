function celsiusToFahrenheit(celsius) {
    return 1.8*celsius+32;
}

console.log("Celsius        Fahrenheit");
for (let c = 0; c < 100; c++) {
    const f = celsiusToFahrenheit(c);
    console.log(`${c}               ${f}`)
}