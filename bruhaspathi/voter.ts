function isVoter(Name:string, age:number) {
    if (age >= 19) return `${Name} You are Eligible to vote go and vote`;
    else return `${Name} You are Ineligible to vote go and study comeback when your age is 19 or above`;
}

console.log(isVoter("Damodar", 24));
console.log(isVoter("Cherish", 10));
