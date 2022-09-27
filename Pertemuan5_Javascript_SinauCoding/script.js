var totalBus = 10; var busAktif= 7;


for(var numBus = 1; numBus <= totalBus; numBus++) {
    if(numBus <= busAktif ) {
        console.log('Bus No. ' + numBus + ' Beroperasi dengan baik');
    } else if(numBus === 8) {
        console.log('Bus No. ' + numBus + ' Sedang Lembur');
    } else {
        console.log('Bus No. ' + numBus + ' Tidak sedang beroperasi');
    }
}