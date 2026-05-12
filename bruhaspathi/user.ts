function createUser(name:string, email:string, isAdmin:boolean){
    if (isAdmin) return "Admin Created";
    else return "User Created"
}

console.log(createUser("Damodar", "damodar@email.com", true));
console.log(createUser("Ramana", "ramana@email.com", false));
