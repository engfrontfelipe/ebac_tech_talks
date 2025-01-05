const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();



const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
    
    // Para pegar as Informações de horas em ms forão usados os calculos a seguir 

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaDoEvento %  diasEmMs / horasEmMs); // sinal de porcentagem usado para pegar o resto da divisão.
    const minutosAteOEvento = Math.floor(distanciaDoEvento % horasEmMs / minutoEmMs); 
    const segundosAteOEvento = Math.floor(distanciaDoEvento % minutoEmMs / 1000) 
    
    if(distanciaDoEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Esse evento já expirou."
    }else{
        document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `
    }

}, 1000);


