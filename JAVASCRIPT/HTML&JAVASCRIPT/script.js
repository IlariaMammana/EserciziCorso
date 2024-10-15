const $theParagraph = document.querySelector("#the-paragraph");

$theParagraph.innerText = "Changed Text "; // ES. Modifica il testo di un paragrafo

$theParagraph.style.backgroundColor = "pink"; // ES. Cambia lo stile
$theParagraph.style.fontSize = "18px";

$theParagraph.innerHTML += '<button id="the-btn">Click Here</button>'; // ES. Modifica l'html

const ul = document.createElement("ul"); // ES. Crea una lista

for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li'); // ES. Crea i list items
    li.innerText = i;
    ul.appendChild(li);
}
document.body.appendChild(ul);

const form = document.createElement('form'); //ES. Submit
form.id = 'the-form';

const nomeInput = document.createElement('input');
nomeInput.type = 'text';
nomeInput.placeholder = 'Nome';
form.appendChild(nomeInput);

const cognomeInput = document.createElement('input');
cognomeInput.type = 'text';
cognomeInput.placeholder = 'Cognome';
form.appendChild(cognomeInput);

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.innerText = 'Invia';
form.appendChild(submitBtn);

document.body.appendChild(form);

form.addEventListener('submit', (event) => {
    if (!nomeInput.value || !cognomeInput.value) {
        alert('Per favore, compila tutti i campi.');
    } else {
        alert('Form inviato con successo!');
        form.reset();
    }
});