class Automobile {
  #contatoreChiamate = 0;

  constructor(marca, modello, anno = 0, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  _controllaChilometri() {
    if (this.chilometraggio > 100000) {
      return `Attenzione: il chilometraggio ha superato i 100.000 km!`;
    }
    return `Il chilometraggio è sotto controllo: ${this.chilometraggio}`;
  }

  #incrementaContatore() {
    this.#contatoreChiamate++;
  }

  descrizione(marca, modello, anno) {
    return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
  }

  aggiungiChilometri(km) {
    if (km > 0) {
      this.chilometraggio += km;
      this.#incrementaContatore();
    }
  }

  mostraContatoreChiamate() {
    return this.#contatoreChiamate;
  }

  get chilometraggioAttuale() {
    return this.chilometraggio;
  }

  set chilometraggioAttuale(nuovoValore) {
    if (nuovoValore >= this.chilometraggio) {
        this.chilometraggio = nuovoValore;
    }  
  }  
}

const oldAuto = new Automobile("Chevrolet", "Impala", 1967);

oldAuto.aggiungiChilometri(35);
oldAuto.mostraContatoreChiamate();

oldAuto.chilometraggioAttuale = 8000;
console.log(oldAuto.chilometraggio);




