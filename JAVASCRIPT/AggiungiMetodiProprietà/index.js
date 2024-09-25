class Automobile {
  constructor(marca, modello, anno, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }
  descrizione = (marca, modello, anno) => {
    return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
  }

  aggiungiChilometri(km) {
    if (km > 0) {
      this.chilometraggio += km;
    }
  }

  mostraChilometraggio = () => {
    return this.chilometraggio;
  }
}

const oldAuto = new Automobile("Chevrolet", "Impala", "1967", 8000);

console.log(oldAuto.descrizione());

oldAuto.aggiungiChilometri(125)

console.log(oldAuto.mostraChilometraggio());
