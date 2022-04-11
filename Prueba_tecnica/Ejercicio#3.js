is_palindrome = function (string) {
    console.log('Nuevo string', string)
    if (string.length <= 1) {
        return true;
    }
    
    let [firstLetter] = string;
    let lastLetter = string[string.length - 1];
    
    if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
        return is_palindrome(stringWithoutFirstAndLastLetters);
    } else {
        return false;
    }
};

// console.log(is_palindrome('ANNA'));
// console.log(is_palindrome('ANA'));
console.log(is_palindrome('RECONOCER'));