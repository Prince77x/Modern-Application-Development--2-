
// Show different messages based on combination
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin){console.log("welcome user");}
else if (isLoggedIn && !isAdmin){console.log("welcome admin");}
else {console.log("login first");}