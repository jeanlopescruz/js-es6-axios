function exibirTempoEmTempo(){
    console.log('Fala comigo, ansioso');
}

function exibirDelay(){
    console.log('Fala comigo, atrasado');
}

setInterval(exibirTempoEmTempo, 1000);
setTimeout(exibirDelay, 2000);