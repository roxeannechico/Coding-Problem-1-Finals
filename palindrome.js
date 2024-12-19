const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function reverseString(str) {
    return str.split('').reverse().join('');
}

function checkPalindrome(word) {
    let reversed = reverseString(word);
    console.log(`Original String: ${word}`);
    console.log(`Reversed String: ${reversed}`);
    console.log(`Is it a palindrome? ${word === reversed}`);
}

rl.question("Enter the first word: ", (word1) => {
    rl.question("Enter the second word: ", (word2) => {
        checkPalindrome(word1);
        checkPalindrome(word2);
        rl.close(); 
    });
});