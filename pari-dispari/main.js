const min = 1;
const max = 5;
const playerNumber = inputFromMinToMax(min, max);

if (playerNumber == null) { // se l'utente clicca annulla al primo input, il programma si ferma
    alert("Va bene, giocheremo un'altra volta :)");
} else { //altrimenti prosegue
    const options = ['pari', 'dispari'];
    const chosenOption = chooseString(options, 'pari o dispari?');

    const computerNumber = randomFromMinToMax(min, max);
    alert('Il computer ha scelto il numero ' + computerNumber);

    const sum = playerNumber + computerNumber;

    if (chosenOption == oddOrEven(sum)) {
        alert(playerNumber + ' + ' + computerNumber + ' = ' + sum + '. HAI VINTO');
    } else {
        alert(playerNumber + ' + ' + computerNumber + ' = ' + sum + '. HAI PERSO');
    }
}



/* 
    fa scegliere in input un numero compreso tra due valori
    ritorna il numero scelto (convertito a intero se con virgola) o null se l'utente clicca annulla
*/
function inputFromMinToMax (min, max) {

    let input;
    let exit = false;

    do {
        input = prompt('Inserisci un numero intero compreso tra ' + min + ' e ' + max);
        if (input == null) {
            exit = true;
        } else {
            input = Math.floor(parseInt(input));
            if (isNaN(input) || input < min || input > max) {
                exit = false;
                alert('Dato non corretto.');
            } else {
                exit = true;
            }
        }
    } while (!exit);

    return input;

}



/*
    fa scegliere in input una delle stringhe dell'array fornito
    ritorna la stringa scelta
*/
function chooseString (array, message) {

    let match = false;
    let input;

    do {
        input = (prompt(message)).toLowerCase();
        for (let i = 0; i < array.length && match == false; i++) {
            if (input == array[i]) {
                match = true;
            }
        }
        if (!match) {
            alert('Opzione non disponibile')
        }
    } while (!match);

    return input;
}



/*
    genera un numero intero casuale compreso tra due valori
    ritorna il numero generato
*/
function randomFromMinToMax (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/*
    stabilisce se il numero in ingresso è pari o dispari
    ritorna il risultato in stringa
*/
function oddOrEven (number) {

    let result;

    if (number % 2 == 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}