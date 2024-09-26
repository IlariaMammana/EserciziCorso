class Automobile {
  #contatoreChiamate = 0;

  constructor(marca, modello, anno = 0, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
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

  mostraChilometraggio() {
    return this.chilometraggio;
  }
}

const oldAuto = new Automobile("Chevrolet", "Impala", 1967, 8000);

oldAuto.aggiungiChilometri(35);
oldAuto.aggiungiChilometri(87);
oldAuto.aggiungiChilometri(96);

console.log(oldAuto.mostraContatoreChiamate());




