class Automobile {
  constructor(marca, modello, anno = 0,) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  descrizione(marca, modello, anno) {
    return `Veicolo: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
  }

  static verificaIstanza(obj, classe) {
    if (obj instanceof classe) {
        console.log(`${obj.constructor.name} è un'istanza di ${classe.name}.`);
    } else {
        console.log(`${obj.constructor.name} NON è un'istanza di ${classe.name}.`);
    }
}
}

class Camion extends Automobile{
  constructor(marca, modello, anno, caricoMassimo = 0) {
    super(marca, modello, anno);
    this.caricoMassimo = caricoMassimo;
  }

  descrizione() {
    return `${super.descrizione()}, Carico Massimo: ${this.caricoMassimo}kg`;
  }
}

const impala97 = new Automobile("Chevrolet", "Impala", 1967);
const eurocargo09 = new Camion("Iveco", "Eurocargo", 2009, 0, 2800)

Automobile.verificaIstanza(impala97, Automobile)
Automobile.verificaIstanza(eurocargo09, Automobile)
Camion.verificaIstanza(eurocargo09, Camion)
Camion.verificaIstanza(impala97, Camion)

