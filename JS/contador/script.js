const btnConta = document.getElementById('btnConta');

const btnContaClick = function () {
    Conta();
}

Conta = () => {
    //aumenta a contagem
    let contador = document.getElementById('contagem')
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
    //muda a cor do botão para uma aleatória
    let randomColor = "#" + Math . floor ( Math . random () * 16777215 ). toString ( 16 ); 
    btnConta.style.backgroundColor = randomColor;
}

btnConta.addEventListener('click', btnContaClick);

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
    }

const btnDado = document.getElementById('btnDado');

const btnDadoClick = function () {
    LancaDado();
    }

LancaDado = () => {
    let dado = document.getElementById('dado').value;
    let qtdDados = document.getElementById('qtdDados').value;
    let result = document.getElementById("dadoResult");
    let historico = document.getElementById("historico");
    result.innerHTML = "";

    let nome = document.getElementById("nome").value;
    let pNome = document.createElement("p"); 
    pNome.textContent = nome;
    result.appendChild(pNome);

    let historicoElement = document.createElement("li");
    historico.appendChild(pNome);
    
    for (let i = 1; i <= qtdDados; i++) { 
        let valor = obterNumeroAleatorio(1, parseInt(dado));
        let p = document.createElement("p");
        if(qtdDados == 1){   
            p.textContent = `Dado: ${valor}`;
        }else{
            p.textContent = `Dado ${i}: ${valor}`;
        }
        historicoElement.textContent += `${valor} `;
        result.appendChild(p); 
    }
    historico.appendChild(historicoElement);
    console.log(result)
}

btnDado.addEventListener('click', btnDadoClick);
