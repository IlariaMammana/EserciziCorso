function persona(persona) {
    const { nome, cognome, eta, città } = persona;
    return `Nome: ${nome}, Cognome: ${cognome}, Età: ${eta}, Città: ${città}`;
}

const personaCreata = {
    nome: "Miguel",
    cognome: "Stark",
    eta: 37,
    città: "New York"
};

const descrizione = persona(personaCreata);
console.log(descrizione);