let score= parseInt(prompt('100','0'))

switch (true) {
    case (score >= 90 && score <= 100):
        console.log('voto ottimo');
    break;    
    case (score >= 70 && score <= 89):
        console.log('il voto è buono');
    break;      
    case (score >= 60 && score <= 69):
        console.log('il voto è sufficiente');
    break;  
    case (score <= 59):
        console.log('il voto è insufficiente');
}