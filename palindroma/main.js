let word = notEmpty('Inserisci una frase o una parola:');

if (isPalindrome(word)) {
    alert('È palindroma!');
} else {
    alert('Non è palindroma.');
}


// funzione che stabilisce se una frase o parola è palindroma
function isPalindrome(string) {
    
    string = string.replace(/\s+/g, ''); //rimuovo ogni tipo di spazio dalla stringa in input

    let palindrome = true;
    const max = (string.length - 1) / 2; //voglio controllare fino a metà parola
    let j = string.length - 1;

    for (let i = 0; i < max && palindrome == true; i++) {
        if (string[j] != string[i]) {
            palindrome = false;
        }
        j--;
    }

    return palindrome;
}

// funzione che accetta in input solo una stringa non vuota
function notEmpty(message) {
    let input;
    
    do {
        input = prompt(message);
        if (input == null || input == '') {
            alert('Dato non corretto');
        }
    } while (input == null || input == '');

    return input;
}