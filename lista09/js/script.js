window.addEventListener("DOMContentLoaded", function(){
    var btnA = document.getElementById("btnA");
    var textA = document.getElementById("textA");
    var btnB = document.getElementById("btnB");
    var textB = document.getElementById("textB");
    var btnC = document.getElementById("btnC");
    var textC = document.getElementById("textC");
    var btnD = document.getElementById("btnD");
    var textD = document.getElementById("textD");
    var btnE = document.getElementById("btnE");
    var textE = document.getElementById("textE");
    var btnF = document.getElementById("btnF");
    var textF = document.getElementById("textF");
    var btnG = document.getElementById("btnG");
    var textG = document.getElementById("textG");
    var btnH = document.getElementById("btnH");
    var textH = document.getElementById("textH");
    var btnI = document.getElementById("btnI");
    var textI = document.getElementById("textI");
    var btnJ = document.getElementById("btnJ");
    var textJ = document.getElementById("textJ");
    var btnK = document.getElementById("btnK");
    var textK = document.getElementById("textK");
    var btnL = document.getElementById("btnL");
    var textL = document.getElementById("textL");
    var btnM = document.getElementById("btnM");
    var textM = document.getElementById("textM");
    var btnN = document.getElementById("btnN");
    var textN = document.getElementById("textN");
    var btnO = document.getElementById("btnO");
    var textO = document.getElementById("textO");
    var btnP = document.getElementById("btnP");
    var textP = document.getElementById("textP");
    var btnQ = document.getElementById("btnQ");
    var textQ = document.getElementById("textQ");
    var btnR = document.getElementById("btnR");
    var textR = document.getElementById("textR");
    var btnS = document.getElementById("btnS");
    var textS = document.getElementById("textS");
    var btnT = document.getElementById("btnT");
    var textT = document.getElementById("textT");
    var btnU = document.getElementById("btnU");
    var textU = document.getElementById("textU");
    var btnV = document.getElementById("btnV");
    var textV = document.getElementById("textV");
    var btnW = document.getElementById("btnW");
    var textW = document.getElementById("textW");

    btnA.addEventListener("click", function(){
        var regex = /^[01]+$/;
        if (regex.test(textA.value)){
            alert("Número Validado");
        }else
            alert("Entrada inválida");
    });
    btnB.addEventListener("click", function(){
        var regex = /^[0-9A-Fa-f]+$/;
        if (regex.test(textB.value)){
            alert("Número Validado");
        }else
            alert("Entrada inválida");
    });
    btnC.addEventListener("click", function(){
        var regex = /^[\d]+[,\.][\d]+$/;
        if (regex.test(textC.value)){
            alert("Número Validado");
        }else
            alert("Entrada inválida");
    });
    btnD.addEventListener("click", function(){
        var regex = /^[\d]+[\.,]?[\d]+?$/;
        if (regex.test(textD.value)){
            alert("Número Validado");
        }else
            alert("Entrada inválida");
    });
    btnE.addEventListener("click", function(){
        var regex = /^[0-2][0-9]:[0-6][0-9]:[0-6][0-9]$/;
        if (regex.test(textE.value)){
            alert("Horário Validado");
        }else
            alert("Entrada inválida");
    });
    btnF.addEventListener("click", function(){
        var regex = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
        if (regex.test(textF.value)){
            alert("Data Validada");
        }else
            alert("Entrada inválida");
    });
    btnG.addEventListener("click", function(){
        var regex = /^\d{8}|(\d{2}\.\d{3}-\d{3})$/;
        if (regex.test(textG.value)){
            alert("CEP Validado");
        }else
            alert("Entrada inválida");
    });
    btnH.addEventListener("click", function(){
        var regex = /^\d{11}|(\d{3}\.\d{3}\.\d{3}-\d{2})$/;
        if (regex.test(textH.value)){
            alert("CPF Validado");
        }else
            alert("Entrada inválida");
    });
    btnI.addEventListener("click", function(){
        var regex = /^\d{14}|(\d{2}\.\d{3}\.\d{3}\/000\d-\d{2})$/;
        if (regex.test(textI.value)){
            alert("CNPJ Validado");
        }else
            alert("Entrada inválida");
    });
    btnJ.addEventListener("click", function(){
        var regex = /\([\d]+\)$/;
        if (regex.test(textJ.value)){
            alert("Número Validado");
        }else
            alert("Entrada inválida");
    });
    btnK.addEventListener("click", function(){
        var regex = /^[a-z]+[\W_]*[\d]*@[a-z]+\.[a-z]{2,3}$/;
    if (regex.test(textK.value)){
        alert("Email Validado");
    }else
        alert("Entrada inválida");
    });
    btnL.addEventListener("click", function(){
        var regex = /^[\d]{3}\.[\d]{3}\.[\d]{1,3}\.[\d]{1,3}$/;
    if (regex.test(textL.value)){
        alert("Domínio ou IP Validado");
    }else
        alert("Entrada inválida");
    });
    btnM.addEventListener("click", function(){
        var regex = /^\d[\.,][\d]{1,2}$/;
    if (regex.test(textM.value)){
        alert("Altura em cm Validada");
    }else
        alert("Entrada inválida");
    });
    btnN.addEventListener("click", function(){
        var regex = /^[A-Z][a-z]+$/;
    if (regex.test(textN.value)){
        alert("Nome Validado");
    }else
        alert("Entrada inválida");
    });
    btnO.addEventListener("click", function(){
        var regex = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
    if (regex.test(textO.value)){
        alert("Telefone Validado");
    }else
        alert("Entrada inválida");
    });
    btnP.addEventListener("click", function(){
        var regex = /^IFTM\scampus\sUberlândia(\sCentro)?$/;
    if (regex.test(textP.value)){
        alert("Texto Validado");
    }else
        alert("Entrada inválida");
    });
    btnQ.addEventListener("click", function(){
        var regex = /^(100|[1-9][0-9]?)$/;
    if (regex.test(textQ.value)){
        alert("Número Validado");
    }else
        alert("Entrada inválida");
    });
    btnR.addEventListener("click", function(){
        var regex = /^[A-Za-z]{3}\d[A-Za-z]\d{2}$/;
    if (regex.test(textR.value)){
        alert("Placa Validada");
    }else
        alert("Entrada inválida");
    });
    btnS.addEventListener("click", function(){
        var regex = /^[aeioubcd]+$/i;
    if (regex.test(textS.value)){
        alert("Palavra Validada");
    }else
        alert("Entrada inválida");
    });
    btnT.addEventListener("click", function(){
        var regex = /^R\$\s?([\d]{1,3}\.)*[\d]{1,3},\d\d?$/;
    if (regex.test(textT.value)){
        alert("Faturamento Validado");
    }else
        alert("Entrada inválida");
    });
    btnU.addEventListener("click", function(){
        var regex = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
    if (regex.test(textU.value)){
        alert("Matrícula Validada");
    }else
        alert("Entrada inválida");
    }); 
    btnV.addEventListener("click", function(){
        var regex = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
    if (regex.test(textV.value)){
        alert("Matrícula Validada");
    }else
        alert("Entrada inválida");
    });
    btnW.addEventListener("click", function(){
        var regex = /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]\sUberlândia(\sCentro)?$/;
    if (regex.test(textW.value)){
        alert("Matrícula Validada");
    }else
        alert("Entrada inválida");
    });
    
    
})