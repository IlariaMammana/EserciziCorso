class Automobile {
  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }
  descrizione(marca, modello, anno) {
    return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
  }

  aggiungiChilometri(km) {
    if (km > 0) {
      this.chilometraggio += km;
    }
  }

  mostraChilometraggio() {
    return this.chilometraggio;
  }
}

class Elettrica extends Automobile {
  constructor(marca, modello, anno, chilometraggio, autonomia) {
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia;
  }

  descrizione() {
    return `${super.descrizione()}, Autonomia: ${this.autonomia} km`;
  }

  ricarica(km) {
    this.autonomia += km;
    console.log(`Autonomia ricaricata di ${km} km.`);
}

}

const oldAuto = new Automobile("Chevrolet", "Impala", "1967",8000);
const newAuto = new Elettrica ("Toyota", "Yaris", "2020", 0, 400)

console.log(newAuto.descrizione());

newAuto.ricarica(75)