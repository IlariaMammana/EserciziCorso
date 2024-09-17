let score= parseInt(prompt('100','0'))

switch (true) {
    case (score >= 90):
    case (score <= 100):
        console.log('voto ottimo');
    case (score >= 70):
    case (score <= 89):
        console.log('il voto è buono');
    case (score >= 60):
    case (score <= 69):
        console.log('il voto è sufficiente');
    case (score <= 59):
        console.log('il voto è insufficiente');
}