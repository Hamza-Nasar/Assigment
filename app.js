        function charChecker() {
            var char = prompt("Enter a single character:");
            if (char && char.length === 1) {
                var code = char.charCodeAt(0);
                if (code >= 48 && code <= 57) {
                    alert("Input is a Number");
                } else if (code >= 65 && code <= 90) {
                    alert("Input is an Uppercase letter");
                } else if (code >= 97 && code <= 122) {
                    alert("Input is a Lowercase letter");
                } else {
                    alert("Input is a special character");
                }
            } else {
                alert("Please enter exactly one character.");
            }
        }

        function compareIntegers() {
            var num1 = parseInt(prompt("Enter first integer:"));
            var num2 = parseInt(prompt("Enter second integer:"));

            if (num1 > num2) {
                alert("The larger integer is: " + num1);
            } else if (num2 > num1) {
                alert("The larger integer is: " + num2);
            } else {
                alert("Both integers are equal: " + num1);
            }
        }

        function checkNumberSign() {
            var num = parseFloat(prompt("Enter a number:"));
            if (num > 0) {
                alert(num + " is positive.");
            } else if (num < 0) {
                alert(num + " is negative.");
            } else {
                alert("The number is zero.");
            }
        }

        function isVowel() {
            var char = prompt("Enter a single alphabet character:");
            if (char && char.length === 1) {
                char = char.toLowerCase();
                if ("aeiou".includes(char)) {
                    alert("true");
                } else {
                    alert("false");
                }
            } else {
                alert("Please enter a single character.");
            }
        }

        function validatePassword() {
            var correctPassword = "Secret123"; // You can change this
            var enteredPassword = prompt("Enter your password:");

            if (!enteredPassword) {
                alert("Please enter your password");
            } else if (enteredPassword === correctPassword) {
                alert("Correct! The password you entered matches the original password");
            } else {
                alert("Incorrect password");
            }
        }

        function fixedGreeting() {
            var greeting;
            var hour = 13;
            if (hour < 18) {
                greeting = "Good day";
            } else {
                greeting = "Good evening";
            }
            alert(greeting);
        }

        function timeGreeting() {
            var time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900 = 7pm):"));
            if (time >= 0 && time < 1200) {
                alert("Good Morning!");
            } else if (time >= 1200 && time < 1700) {
                alert("Good Afternoon!");
            } else if (time >= 1700 && time < 2100) {
                alert("Good Evening!");
            } else if (time >= 2100 && time <= 2359) {
                alert("Good Night!");
            } else {
                alert("Invalid time format entered!");
            }
        }