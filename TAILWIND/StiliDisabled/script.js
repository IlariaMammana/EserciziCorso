//richiamo gli elementi che mi servono dal document (form e bottoni)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('submitForm');
    const submitButton = document.getElementById('submitButton');
    const cancelButton = document.getElementById('cancelButton');

    // con questa funzione controllo che tutti i campi siano validi 
    //".checkValidity()" verifica se l'elemento input soddisfa i requisiti degli attributi (es.required)
    function checkValidityForm() {
        const isValid = form.checkValidity();
        submitButton.disabled = !isValid;
        cancelButton.disabled = !isValid;
    }

    // Aggiungo un evento 'input' ad ogni campo del form che attiva la funzione precedente
    //per verificare continuamente lo stato di validità.
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', checkValidityForm);
    });

    // Controlla la validità del modulo a monte
    checkValidityForm();
});