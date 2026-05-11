const calc = (a: number, b: number, vari: string) => {
    switch (vari) {
        case 'add':
            return a + b;
            break;
        case 'sub':
            return a - b;
            break;
        case 'mul':
            return a * b;
            break;
        case 'div':
            return a / b;
            break;
        default:
            return `${vari} is not valid`;
    }
}

let m: number = 12;
let n: number = 13;
console.log(calc(m, n, 'add'));
console.log(calc(m, n, 'sub'));
console.log(calc(m, n, 'mul'));
console.log(calc(m, n, 'div'));
console.log(calc(m, n, 'Add'));
