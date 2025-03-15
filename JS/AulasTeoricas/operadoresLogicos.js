const btnExecutar1 = document.getElementById('executarBtn1');

const btnExecutar1Click = function () {
    alert(Objetios);
}

btnExecutar1.addEventListener('click', btnExecutar1Click);

function Objetios(){
    let pessoa = {
        nome: 'João',
        idade: 25,
        profissao: 'Programador'
    } ;
}
