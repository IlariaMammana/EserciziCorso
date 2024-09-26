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
    return `Veicolo: ${this.marca} ${this.modello}, Anno: ${this.anno}`;
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

class Camion extends Automobile{
  constructor(marca, modello, anno, chilometraggio, caricoMassimo = 0) {
    super(marca, modello, anno, chilometraggio);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = 0;
  }

  descrizione() {
    return `${super.descrizione()}, Carico Massimo: ${this.caricoMassimo}kg`;
  }

  carica(kg) {
    if (this.caricoAttuale + kg <= this.caricoMassimo){
      this.caricoAttuale += kg;
      this.caricodisponibile = this.caricoMassimo - this.caricoAttuale
      console.log(`Hai aggiunto ${kg}kg a ${this.caricoAttuale}kg, puoi caricare ancora di ${this.caricodisponibile}`)
    } else {
      console.log(`Il camion supera il carico massimo (${this.caricoMassimo}kg)`);
    }
  }
}

const oldAuto = new Automobile("Chevrolet", "Impala", 1967);
const camion1 = new Camion("Iveco", "Eurocargo", 2009, 0, 2800)

console.log(camion1.descrizione());

camion1.carica(3000)



