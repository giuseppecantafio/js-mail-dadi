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
    //console.log(mail);

    for (let i = 0; i < regMail.length; i++){
        //console.log(regMail[i]);
   
        if(regMail[i] === eMail.value){
            cercaMail = true;
        }
   };

   if(cercaMail){
    alert('Accesso consentito');
    let validationNone = document.getElementById('validation');
    validationNone.setAttribute('class', 'd-none');
    } else {
        alert('Accesso negato');
    }
   
});


