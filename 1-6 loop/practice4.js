

let n = prompt(`양의 정수:`)
let count = 0
for (let i = 1; i < n ; i%=n) {
    if (i % n === n) {
        count++;
    }
}
console.log(alert(`약수의 갯수 ${count}`));