let marks = 82;
//marks = Number(prompt("enter your marks:")) it work only in web not in node.js
// Print "Excellent(>80)", "Good(80-60)", "Average(60-40)", or "Fail(<40)" based on ranges
if (marks>=80){
    console.log("Excellent")
}else if (80>marks && marks>=60){
    console.log("Good")
}else if (60>marks && marks>=40){
    console.log("average")
}else{
    console.log("Fail")
}