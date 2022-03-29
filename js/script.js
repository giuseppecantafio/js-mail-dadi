/////////// MAIL
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let eMail = document.getElementById("mail");

let bottone = document.getElementById("accedi");

const regMail = ['helena_carter@gmail.com', 'felix_turner@gmail.com', 'delia_turner@gmail.com'];

let cercaMail = false;

bottone.addEventListener("click", function(){

    let mail = eMail.value;
    // console.log(mail);

    for (let i = 0; i < regMail.length; i++){
        // console.log(regMail[i]);
   
        if(regMail[i] === eMail.value){
            cercaMail = true;
        }
   };

   if(cercaMail){
    alert('Accesso consentito');
    let validationNone = document.getElementById('validation');
    validationNone.setAttribute('class', 'd-none');
    let dadi = document.getElementById('dadi');
    dadi.setAttribute('class', 'container')
    } else {
        alert('Accesso negato');
    }
   
});

/////////// GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


let bottone2 = document.getElementById('tentaLaFortuna');
let result = document.getElementById('risultato')

bottone2.addEventListener("click", function(){

    let computerDice = (Math.round(Math.random() * 5) + 1);
    console.log(computerDice)

    let playerDice = (Math.round(Math.random() * 5) + 1);
    console.log(playerDice);

    if(computerDice < playerDice){
        result.innerHTML = ` Numero computer: ${computerDice} - Numero giocatore: ${playerDice}<br/> <span class="win">HAI VINTO!</span>`
    } else if (computerDice == playerDice){
        result.innerHTML = ` Numero computer: ${computerDice} - Numero giocatore: ${playerDice}<br/> <span class="draw">PATTA!</span>`
    } else{
        result.innerHTML = ` Numero computer: ${computerDice} - Numero giocatore: ${playerDice}<br/> <span class="loser">HAI PERSO!</span>`
    }

});






