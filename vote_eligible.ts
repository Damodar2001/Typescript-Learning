function eligible(age: number) {
    if (age >= 19) return "eligible to vote";
    else return "ineligible come back after turning 19";
}

console.log(eligible(19));
console.log(eligible(15));
