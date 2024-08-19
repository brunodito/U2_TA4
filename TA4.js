function sumAll (a,b) {
    let sum = 0
    for (i=a ; i<=b ; i++) {
        sum += i
    }
    return sum
}

console.log(sumAll(10,15))