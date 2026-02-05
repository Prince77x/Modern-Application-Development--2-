// Given player1 and player2's choice, print winner or draw

// here we have to take the input from the users 
// for now i am giving the information 
let p1 = "scissors"
let p2 = "paper"

if (p1 === p2){console.log("its tie ")}
else if ((p1==="rock" && p2 ==="scissors") ||
        (p1 ==="scissors" && p2 === "paper")||
        (p1 ==="paper" && p2 ==="rock") 
){ console.log("P1 wins ")}
else{console.log("P2 wins")}