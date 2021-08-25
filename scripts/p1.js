function showPrimes(n) {

    let listNumber = []
    for (let i = 2; i <= n; i++) {
        if (!isPrimes(i)) continue;
        listNumber.push(i)
    }
    alert(`For n = ${number} prime numbers are ${listNumber}`)
}

function isPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;

}

let number = Number(prompt("Enter a positive integer "))
while (true) {
    if (Number.isInteger(number) && number > 2) {
        showPrimes(number)
        break
    } else {
        number = Number(prompt("Enter a positive integer"))
    }

}