const btnExecutar = document.getElementById('executarBtn');

const btnExecutarClick = function () {
    alert(`O resultado disso tudo é ${Matematica(prompt("Digite um número: "))}`);
}

function ReceberDados() {
    nome = prompt("Digite seu nome: ")
    idade = prompt("Digite sua idade: ")
    profissao = prompt("Digite sua profissão: ")
}

function RetornarDados () {
    let mensagem
    if (idade >= 18) {
        mensagem = " você ja pode ser "
    }else{
        mensagem = " você ainda não pode ser "
    }
    alert("Bem vindo " + nome +"\ncom " + idade + mensagem + profissao);
}

function Matematica(numero) {
    let resultado = numero

    //Operações matemáticas
    resultado + 10;
    resultado - 10;
    resultado * 10;
    resultado / 10;

    //Operadores de incremento e decremento
    resultado += 10;
    resultado -= 10;
    resultado *= 10;
    resultado /= 10;
    resultado++;
    resultado--;

    return resultado;
}

btnExecutar.addEventListener('click', btnExecutarClick)