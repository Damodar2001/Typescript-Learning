const category = (age: number) => {
    if (age < 13) {
        console.log("Person is child");
    } else if (age < 18) {
        console.log("Person is teenager");
    } else if (age < 60) {
        console.log("Person is adult");
    } else {
        console.log("Person is senior citizen");
    }
}

category(12)
category(16)
category(22)
category(65)