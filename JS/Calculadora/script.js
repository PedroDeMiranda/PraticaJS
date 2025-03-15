const painel = document.getElementById("textoPainel");
var textoExibido = "";
var resultado;

//função para executar operação
function resolveOperacao() {
    const expressao = textoExibido;
    try {
      const resultado = eval(expressao);
      textoExibido = resultado.toString();
      painel.innerHTML = textoExibido;
    } catch (erro) {
      textoExibido = "Erro";
      painel.innerHTML = textoExibido;
    }
  }

//armazenar o numero clicado
function exibePainel(digito) {
    textoExibido += digito;
    painel.innerHTML = textoExibido;
}

// Botão 1
const botao1 = document.getElementById('1');
const botao1Click = function () {
    console.log('Botão 1 clicado');
    exibePainel(1);
}
botao1.addEventListener('click', botao1Click);

// Botão 2
const botao2 = document.getElementById('2');
const botao2Click = function () {
    console.log('Botão 2 clicado');
    exibePainel(2);
}
botao2.addEventListener('click', botao2Click);

// Botão 3
const botao3 = document.getElementById('3');
const botao3Click = function () {
    console.log('Botão 3 clicado');
    exibePainel(3);
}
botao3.addEventListener('click', botao3Click);

// Botão 4
const botao4 = document.getElementById('4');
const botao4Click = function () {
    console.log('Botão 4 clicado');
    exibePainel(4);
}
botao4.addEventListener('click', botao4Click);

// Botão 5
const botao5 = document.getElementById('5');
const botao5Click = function () {
    console.log('Botão 5 clicado');
    exibePainel(5);
}
botao5.addEventListener('click', botao5Click);

// Botão 6
const botao6 = document.getElementById('6');
const botao6Click = function () {
    console.log('Botão 6 clicado');
    exibePainel(6);
}
botao6.addEventListener('click', botao6Click);

// Botão 7
const botao7 = document.getElementById('7');
const botao7Click = function () {
    console.log('Botão 7 clicado');
    exibePainel(7);
}
botao7.addEventListener('click', botao7Click);

// Botão 8
const botao8 = document.getElementById('8');
const botao8Click = function () {
    console.log('Botão 8 clicado');
    exibePainel(8);
}
botao8.addEventListener('click', botao8Click);

// Botão 9
const botao9 = document.getElementById('9');
const botao9Click = function () {
    console.log('Botão 9 clicado');
    exibePainel(9);
}
botao9.addEventListener('click', botao9Click);

// Botão 0
const botao0 = document.getElementById('zero');
const botao0Click = function () {
    console.log('Botão 0 clicado');
    exibePainel(0);
}
botao0.addEventListener('click', botao0Click);

// Botão +
const botaoMais = document.getElementById('+');
const botaoMaisClick = function () {
    console.log('Botão + clicado');
    exibePainel("+");
}
botaoMais.addEventListener('click', botaoMaisClick);

// Botão -
const botaoMenos = document.getElementById('-');
const botaoMenosClick = function () {
  console.log('Botão - clicado');
  exibePainel("-");
}
botaoMenos.addEventListener('click', botaoMenosClick);

// Botão *
const botaoMultiplicacao = document.getElementById('*');
const botaoMultiplicacaoClick = function () {
    console.log('Botão * clicado');
    exibePainel("*");
}
botaoMultiplicacao.addEventListener('click', botaoMultiplicacaoClick);

// Botão /
const botaoDivisao = document.getElementById('/');
const botaoDivisaoClick = function () {
  console.log('Botão ÷ clicado');
  exibePainel("/");
}
botaoDivisao.addEventListener('click', botaoDivisaoClick);

// Botão (
const botaoAbreParenteses = document.getElementById('(');
const botaoAbreParentesesClick = function () {
  console.log('Botão ( clicado');
  exibePainel("(");
}
botaoAbreParenteses.addEventListener('click', botaoAbreParentesesClick);

// Botão )
const botaoFechaParenteses = document.getElementById(')');
const botaoFechaParentesesClick = function () {
    console.log('Botão ) clicado');
    exibePainel(")");
}
botaoFechaParenteses.addEventListener('click', botaoFechaParentesesClick);

// Botão =
const botaoIgual = document.getElementById('igual');
const botaoIgualClick = function () {
    console.log('Botão = clicado');
    resolveOperacao();
}
botaoIgual.addEventListener('click', botaoIgualClick);

// Botão C
const botaoClear = document.getElementById('clear');
const botaoClearClick = function () {
    console.log('Botão C clicado');
    textoExibido = "";
    painel.innerHTML = "";
}
botaoClear.addEventListener('click', botaoClearClick);