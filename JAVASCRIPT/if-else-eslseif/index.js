let score= parseInt (prompt('100','0'))

if (score >= 90 && score <= 100) {
    console.log('voto ottimo');
}else if (score >= 70 && score <= 89) {
    console.log('il voto è buono');  
}else if (score >= 60 && score <= 69) {
    console.log('il voto è sufficiente');
}else {
    console.log('il voto è insufficiente');
}