class Automobile {
  constructor(marca, modello, anno = 0, chilometraggio = 0) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  static confrontaChilometraggio(auto1, auto2) {
    if (auto1.chilometraggio > auto2.chilometraggio) {
        return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore di ${auto2.marca} ${auto2.modello}.`;
    } else if (auto1.chilometraggio < auto2.chilometraggio) {
        return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore di ${auto1.marca} ${auto1.modello}.`;
    } else {
        return `Entrambe le automobili hanno lo stesso chilometraggio.`;
    }
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



const auto1 = new Automobile("Chevrolet", "Impala","1967", 70000)
const auto2 = new Automobile("Lancia", "Ypsilon","2018", 700000)

console.log(Automobile.confrontaChilometraggio(auto1, auto2));
