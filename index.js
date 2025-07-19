function checkCity() {
    var city = prompt("Enter your city name:");
    if (city && city.toLowerCase() === "karachi") {
        alert("Welcome to city of lights");
    } else {
        alert("Welcome to " + city);
    }
}

function checkGender() {
    var gender = prompt("Enter your gender (male/female):");
    if (gender) {
        gender = gender.toLowerCase();
        if (gender === "male") {
            alert("Good Morning Sir.");
        } else if (gender === "female") {
            alert("Good Morning Ma’am.");
        } else {
            alert("Good Morning!");
        }
    }
}

function trafficSignal() {
    var color = prompt("Enter traffic signal color (Red/Yellow/Green):");
    if (color) {
        color = color.toLowerCase();
        if (color === "red") {
            alert("Must Stop");
        } else if (color === "yellow") {
            alert("Ready to move");
        } else if (color === "green") {
            alert("Move now");
        } else {
            alert("Invalid color entered!");
        }
    }
}

function checkFuel() {
    var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
    if (!isNaN(fuel) && fuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Fuel status is sufficient.");
    }
}

function testConditions() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

function marksCalculation() {
    var totalSubjects = 3;
    var totalMarksPerSubject = parseFloat(prompt("Enter total marks for each subject:"));
    var marksObtained = 0;

    for (var i = 1; i <= totalSubjects; i++) {
        var mark = parseFloat(prompt("Enter marks obtained in subject " + i + ":"));
        marksObtained += mark;
    }

    var totalMarks = totalSubjects * totalMarksPerSubject;
    var percentage = (marksObtained / totalMarks) * 100;
    var grade, remarks;

    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage >= 50) {
        grade = "C";
        remarks = "Poor";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    var output = "Total Marks: " + totalMarks + "\n" +
        "Marks Obtained: " + marksObtained + "\n" +
        "Percentage: " + percentage.toFixed(2) + "%\n" +
        "Grade: " + grade + "\n" +
        "Remarks: " + remarks;
    alert(output);
}

function guessGame() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    if (guess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else {
        alert("Wrong guess. The secret number was " + secretNumber);
    }
}

function divisibleByThree() {
    var num = parseInt(prompt("Enter a number to check divisibility by 3:"));
    if (num % 3 === 0) {
        alert(num + " is divisible by 3");
    } else {
        alert(num + " is not divisible by 3");
    }
}

function evenOdd() {
    var num = parseInt(prompt("Enter a number to check if it is even or odd:"));
    if (num % 2 === 0) {
        alert(num + " is even.");
    } else {
        alert(num + " is odd.");
    }
}

function temperatureMessage() {
    var temp = parseFloat(prompt("Enter the temperature:"));
    if (temp > 40) {
        alert("It is too hot outside.");
    } else if (temp > 30) {
        alert("The Weather today is Normal.");
    } else if (temp > 20) {
        alert("Today’s Weather is cool.");
    } else if (temp > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("Weather is very cold.");
    }
}

function simpleCalculator() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operator = prompt("Enter the operation (+, -, *, /, %):");

    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Division by zero error";
    } else if (operator === "%") {
        result = num2 !== 0 ? num1 % num2 : "Division by zero error";
    } else {
        result = "Invalid operator";
    }
    alert("Result: " + result);
}