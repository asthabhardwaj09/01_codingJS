const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(num) {
    if (num < 0) return false; // Negative numbers are not palindromes

    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10; // Extract last digit
        reversedNum = reversedNum * 10 + digit; // Build reversed number
        num = Math.floor(num / 10); // Remove last digit
    }

    return originalNum === reversedNum; // Compare original and reversed numbers
}

// Take input from user in Node.js
rl.question("Enter a number: ", (userInput) => {
    let number = parseInt(userInput, 10);

    if (!isNaN(number)) {
        console.log(`${number} is a palindrome:`, isPalindrome(number));
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }

    rl.close(); // Close input stream
});
