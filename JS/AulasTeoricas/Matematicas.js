const btnExecutar1 = document.getElementById('executarBtn1');
const btnExecutar2 = document.getElementById('executarBtn2');
const btnExecutar3 = document.getElementById('executarBtn3');
const btnExecutar4 = document.getElementById('executarBtn4');

// //Perguntar o exercício que vai executar 
// function perguntarExercicio() {
//     let exercicio = prompt('Qual exercício você deseja executar? 1, 2, 3 ou 4');
//     var escolha
//     switch (exercicio) {  
//         case '1':
//             exercicio1();
//             break;
//         case '2':
//             exercicio2();
//             break;
//         case '3':
//             exercicio3();
//             break;
//         case '4':
//             exercicio4();
//             break;
//         default:
//             alert('Exercício não encontrado');
//             break;
//     }
// }                      

const btnExecutar1Click = function () {
    exercicio1();
}
btnExecutar1.addEventListener('click', btnExecutar1Click);

const btnExecutar2Click = function () {
    exercicio2();
}
btnExecutar2.addEventListener('click', btnExecutar2Click);

const btnExecutar3Click = function () {
    exercicio3();
}
btnExecutar3.addEventListener('click', btnExecutar3Click);

const btnExecutar4Click = function () {
    exercicio4();
}
btnExecutar4.addEventListener('click', btnExecutar4Click);


//1 - Recebe 2 números e retorna a soma deles
function exercicio1() {
    n1 = prompt('Digite o primeiro número');
    n2 = prompt('Digite o segundo número');
    alert(`O resultado da soma é ${parseFloat(n1) + parseFloat(n2)}`);
}

//2 - Recebe 2 números e retorna a subtração deles
function exercicio2() {
    n1 = prompt('Digite o primeiro número');
    n2 = prompt('Digite o segundo número');
    alert(`O resultado da subtração é ${parseFloat(n1) - parseFloat(n2)}`);
}

//3 - Recebe 1 número e retorna o quadrado dele
function exercicio3() {
    n1 = prompt('Digite o número');
    alert(`O resultado do quadrado é ${parseFloat(n1) * n1}`);
}

//4 - Recebe 3 numeros, retorna média deles
function exercicio4() {
    n1 = prompt('Digite o primeiro número');
    n2 = prompt('Digite o segundo número');
    n3 = prompt('Digite o terceiro número');
    alert(`A média dos números é ${(parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3}`);
}
