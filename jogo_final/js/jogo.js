window.addEventListener("DOMContentLoaded", function() {
    const numeroSorteio = document.getElementById("numeroSorteio");
    const btnPlay = document.getElementById("btnPlay");
    const btnPause = document.getElementById("btnPause");
    const btnStop = document.getElementById("btnStop");
    const btnSair = document.getElementById("btnSair");
    const cronosInfo = document.getElementById("cronosInfo");
    const selecao = document.getElementById("selecao");
    const acertoInfo = document.getElementById("acertoInfo");
    const percentualInfo = document.getElementById("percentualInfo");
    const erroInfo = document.getElementById("erroInfo");
    const paresInfo = document.getElementById("paresInfo");

    let intervaloCronometro, intervaloSorteio;
    let segundos, tempo, minuto, segundoResta;
    let sorteioAtivo = false;
    let cronometroAtivo = false;
    let acertos = 0;
    let pares = 0; 
    erroInfo.textContent = 0; 
    paresInfo.textContent = 0;
    acertoInfo.textContent = 0;
    percentualInfo.textContent = 0

    selecao.addEventListener("change", function() {
        if (selecao.value == 1)
            cronosInfo.textContent = "00:00";
        else if (selecao.value == 2)
            cronosInfo.textContent = "01:45";
        else if (selecao.value == 3)
            cronosInfo.textContent = "01:15";
        else if (selecao.value == 4)
            cronosInfo.textContent = "00:30";
    });

    btnPlay.addEventListener("click", function() {
        if (selecao.value == 1) {
            return alert("Primeiro selecione uma dificuldade");
        }
        if (!cronometroAtivo) {
            relogio(selecao.value);
        }
        if (!sorteioAtivo) {
            sorteio(numeroSorteio, selecao.value);
        }
    });

    numeroSorteio.addEventListener("click", function() {
        if (parseInt(numeroSorteio.textContent) % 2 == 0) {
            acertos++; 
            acertoInfo.textContent = acertos;
            numeroSorteio.style.color = "green";
            if (pares > 0) { 
                percentualInfo.textContent = ((acertos / pares) * 100).toFixed(2) + "%";
            }
            
        }else if (selecao.value == 1) {
            numeroSorteio.style.color = "black"
        }
        else{
            erroInfo.textContent = (parseInt(erroInfo.textContent) || 0) + 1;
            numeroSorteio.style.color = "red"; 
        }
    });

    btnPause.addEventListener("click", function() {
        clearInterval(intervaloCronometro);
        clearInterval(intervaloSorteio);
        sorteioAtivo = false; 
        cronometroAtivo = false; 
    });

    btnStop.addEventListener("click", function() {
        clearInterval(intervaloCronometro);
        clearInterval(intervaloSorteio);
        sorteioAtivo = false;
        cronometroAtivo = false;
        cronosInfo.textContent = "00:00";
        numeroSorteio.textContent = "_";
        acertos = 0;
        pares = 0;
        erroInfo.textContent = 0;
        acertoInfo.textContent = 0;
        percentualInfo.textContent = 0;
        paresInfo.textContent = 0;
        selecao.value = 1;
    });

    btnSair.addEventListener("click", function(){
        window.loction.href = "/JavaScript/jogo_final/login.html";
    });

    function relogio(dificuldade) {
        if (dificuldade == 2) {
            segundos = 105;
        } else if (dificuldade == 3) {
            segundos = 75;
        } else if (dificuldade == 4) {
            segundos = 30;
        }
    
        minuto = Math.floor(segundos / 60);
        segundoResta = segundos % 60;
    
        cronometroAtivo = true;
    
        intervaloCronometro = setInterval(function() {
            if (minuto == 0 && segundoResta == 0) {
                clearInterval(intervaloCronometro);
                cronometroAtivo = false;
                clearInterval(intervaloSorteio);
                sorteioAtivo = false;
            } else {
                if (segundoResta === 0) {
                    minuto--;
                    segundoResta = 59;
                } else {
                    segundoResta--;
                }
    
                let formatacao;
                if (segundoResta < 10) {
                    formatacao = `0${minuto}:0${segundoResta}`;
                } else {
                    formatacao = `0${minuto}:${segundoResta}`;
                }
    
                cronosInfo.textContent = formatacao;
            }
        }, 1000);
    }

    function sorteio(variavel, dificuldade) {
        if (dificuldade == 1) {
            return;
        }
    
        if (dificuldade == 2) {
            tempo = 1000;
        } else if (dificuldade == 3) {
            tempo = 500;
        } else if (dificuldade == 4) {
            tempo = 250;
        }
    
        let vet = [];
        for (let i = 0; i < 100; i++) {
            vet[i] = i + 1;
        }
    
        sorteioAtivo = true;
    
        intervaloSorteio = setInterval(function() {
            variavel.style.color = "black";
    
            let text = vet[Math.floor(Math.random() * vet.length)];
            variavel.textContent = text;
    
            if (text % 2 === 0) {
                pares++;
                paresInfo.textContent = pares;
    
                if (pares > 0) { 
                    percentualInfo.textContent = ((acertos / pares) * 100).toFixed(2) + "%";
                }
    
            } else {
                erroInfo.textContent = (parseInt(erroInfo.textContent) || 0) + 1;
            }
        }, tempo);
    }
    
    
    
});
