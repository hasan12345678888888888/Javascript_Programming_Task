// Q1
var i;
for (var i = 0; i <= 10; i++) {
    document.write(i);
}
// Q2
var usualCounter;
for (var usualCounter = 0; usualCounter <= 11; usualCounter++) {
    document.write("<br>" + "This is loop iteration no. : " + (usualCounter + 1) + "<br>");
}
// Q3\
var i;

for (var i = 0; i <= 4; i++) {
    document.write(i);
}
// Q4
var counter;
for (var counter = 0; counter < 100; counter++) {
    document.write("<br>" + (counter + 1) + "<br>");
}
// Q5
var usualcount;
for (var usualcount = 10; usualcount >= 0; usualcount = usualcount - 3) {
    document.write("<br>" + usualcount + "<br>");
}
// Q6
var cityChoice = prompt("Enter your city");
var cityClean = ["karachi", "lahore", "sukkur", "Islamabad"];
for (var i = 0; i <= cityChoice.length; i++) {
    if (cityChoice === cityClean[i]) {
        alert("It is clean city");
    }
    else {
        alert("It is not clean city");
    }
}
// Q7
var cityFound = true;
var cityChoice = prompt("Enter your city");
var cityClean = ["karachi", "lahore", "sukkur", "Islamabad"];
for (var i = 0; i <= cityChoice.length; i++) {
    if (cityChoice === cityClean[i]) {
        cityFound = false;
        alert("It is clean city");
    }

}
if (cityFound === true) {
    alert("It is not clean city");
}
// Q8
var pets = ["cat", "dog", "rat", "cow"]
for (var i = 0; i <= pets.length; i++) {
    document.write("<br>" + "The pet is at " + i + ":" + pets + "<br>")
}
// Q9
var i;
for (var i = 0; i < 10; i++) {
    if (i == 1) {
        alert("The counter is: " + i);
        break;
    }
}
// 10
var firstName = prompt("Enter first name: ");
var userName = ["Ali", "Faizan", "Riyaz", "Mustufa"];
var nameFound = true;
for (var i = 0; i <= userName.length; i++) {
    if (firstName === userName[i]) {
        nameFound = false;
        alert("Enter");
        break;
    }
}
if (nameFound === true) {
    alert("Please enter correct name");
}
// Q11
var userInput = prompt("Enter a list number: ");
var list = ["one", "two", "three", "four", "five"];
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        matchFound = true;
        alert("Match found");
        break;
    }

}
if(matchFound===false)
{
    alert("no match found");
}
// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
var totalArr =[];
for( var i=0;i<firstArr.length;i++)
{
    for(var j=0;j<secondArr.length;j++)
    {
        totalArr.push(firstArr[i]+secondArr[j]);
    }
}
document.write("<br>"+totalArr+"<br>");



