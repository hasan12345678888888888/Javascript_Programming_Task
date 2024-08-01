// Q1
var num1 = prompt("Enter a value");
var num2 = 2;
if (num1 >= num2) {
    document.write("<br>" + "numb1 is greater and equal to numb2");
}
else {
    document.write("<br>" + "numb1 is greater and equal to numb2");
}
// Q2
var engMarks = prompt("Enter your english marks");
var scienceMarks = prompt("Enter your science marks");
var mathMarks = prompt("Enter your maths marks");
var obtainedMarks = engMarks+ scienceMarks+ mathMarks;
var total_marks =300;
var per = (obtainedMarks/total_marks)*100;
if(per >= 80 && per <= 90)
{
    document.write("<br>" +"Your grade is A+");
}
else if(per >= 60 && per <= 70){
    document.write("<br>" +"Your grade is A");
}
else{
    document.write("<br>" +"You are fail");
}
// Q3
var a = prompt("Enter number");
if(a == 10)
{
    document.write("<br>" +"The a is equal to 10")
}
else if (a != 10)
{
    document.write("<br>" +"The a is not equal to 10")
}
else{
    document.write("<br>" +"The wrong number");
}
// Q4
var userInput = prompt("Enter a city");
if(city == karachi)
{
    alert("It is karachi");
}
else if(city != karachi)
{
    alert("It is lahore");
}
else if(city == lahore)
{
    alert("It is lahore");
}
else{
    alert("It is another city");
}

