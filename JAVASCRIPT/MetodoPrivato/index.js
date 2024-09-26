class Automobile {
  constructor(marca, modello, anno = 0, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
    // su internet ho trovato questo per rendere la data dinamica, ho sperimentato
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
        return annoCorrente - this.anno;
  }

  mostraEtà() {
    const età = this.#calcolaEtà();
    console.log(`L'auto ${this.marca} ${this.modello} ha ${età} anni.`);
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

Automobile.prototype.saluta = function() {
  return `Welcome ${this.marca} ${this.modello}`;
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

const oldAuto = new Automobile("Chevrolet", "Impala", 1967,8000);
const newAuto = new Elettrica ("Toyota", "Yaris", 2020, 0, 400);

oldAuto.mostraEtà()
newAuto.mostraEtà()


