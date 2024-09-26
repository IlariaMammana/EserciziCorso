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

  #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
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

  monitoraggioChilometri() {
    const avviso = this._controllaChilometri();
    console.log(avviso);
  }
}

const oldAuto = new Automobile("Chevrolet", "Impala", 1967,8000);
const newAuto = new Elettrica ("Toyota", "Yaris", 2020, 0, 4000);



