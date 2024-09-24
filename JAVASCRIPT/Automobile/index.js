class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca,
    this.modello = modello,
    this.anno = anno
  }
  descrizione = (marca, modello, anno) => {
    return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
  }
}

const oldAuto = new Automobile("Chevrolet", "Impala", "1967");

oldAuto.descrizione()