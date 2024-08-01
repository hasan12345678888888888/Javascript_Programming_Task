// Q1
var password =prompt("Enter your password");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}
// Q2
var a = 1;
var c = "Max";

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
// Q3
if (a === 1 && c === "Max") {
    alert("OK");
}
// Q4
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions are true.");
    }
}