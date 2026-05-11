let role: string;
role = 'Guest';

switch (role) {
    case 'admin':
        console.log("Welcome Admin");
        break;
    case 'user':
        console.log("Welcome User");
        break;
    case 'guest':
        console.log("Welcome Guest");
        break;
    default:
        console.log("Welcome Welcome");
        break;
}