const btnExecutar1 = document.getElementById('exercicio1');
const btnExecutar2 = document.getElementById('exercicio2');
const btnExecutar3 = document.getElementById('exercicio3');
const btnExecutar4 = document.getElementById('exercicio4');
const btnExecutar5 = document.getElementById('exercicio5');
const btnExecutar6 = document.getElementById('exercicio6');
const btnExecutar7 = document.getElementById('exercicio7');
const btnExecutar8 = document.getElementById('exercicio8');
const btnExecutar9 = document.getElementById('exercicio9');

// 1 - Criar um objetos que possuam as características de um carro (nome, marca, ano). Acesse e imprima cada propriedade.
const btnExecutar1Click = function () {
    exercicio1();
}

var carro = {
    nome: 'Fusca',
    marca: 'Volkswagen',
    ano: 1970,
    imprimir: () => {
        return `Nome: ${carro.nome}, Marca: ${carro.marca}, Ano: ${carro.ano}`;
    }
}

function exercicio1() {    
    console.log(carro.imprimir());
    alert(carro.imprimir());
};

// 2 - Altere para que o ano do carro seja o ano atual. Também adicione a propriedade de cor nele.
const btnExecutar2Click = function () {
    exercicio2();
}

function exercicio2() {
    carro.ano = new Date().getFullYear();
    carro.cor = 'Azul';
    carro.imprimir = () => {
        return `Nome: ${carro.nome}, Marca: ${carro.marca}, Ano: ${carro.ano}, Cor: ${carro.cor}`;
        }

    console.log(carro.imprimir());
    alert(carro.imprimir());
};

// 3 - Criar um objeto de livro, ele deve possuir titulo, autor e ano. Também deve possuir um comportamento que imprima as informações desse livro.
const btnExecutar3Click = function () {
    exercicio3();
}

function exercicio3() {
    let livro = {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        imprimir: () => {
            return `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`;
            }
        }
    console.log(livro.imprimir());
    alert(livro.imprimir());
}


// 4 - Crie um array com os elementos Azul, vermelho e Amarelo. Altere o vermelho para verde e o Amarelo para Laranja.

const btnExecutar4Click = function () {
    exercicio4();
}

function exercicio4() {
    let cores = ['Azul', 'Vermelho', 'Amarelo'];
    cores[1] = 'Verde';
    cores[2] = 'Laranja';
    var texto = '';
    cores.forEach(function (elemento, index) {
        texto += elemento + ' ';
    });
    console.log(texto);
    alert(texto);
}

// 5 - Crie um array com os elementos 1, 2, 3 e 4. Utilize o forEach para apresentar o quadrado de cada número. No final apresente o total.

btnExecutar5Click = function () {
    exercicio5();
}
function exercicio5() {
    let numeros = [];
    for (let i = 1; i <= 4; i++) {
        numeros.push(i);
    }
    console.log(JSON.stringify(numeros));
    let total = 0;
    let quadrado = 0;
    numeros.forEach(function (elemento) {
        quadrado = elemento * elemento;
        alert(`quadardo de ${elemento} é ${quadrado}`);
        total += quadrado;
        });
    console.log(total);
    alert(`O total é ${total}`);
}   

// 6 - Gere um array com 5 alunos, eles devem possuir Nome e Nota Final. Ao final exiba somente alunos com nota igual ou superior a 7.

btnExecutar6Click = function () {
    exercicio6();
}

var alunos = [
    { nome: 'João', notaFinal: 6 },
    { nome: 'Maria', notaFinal: 7 },
    { nome: 'Pedro', notaFinal: 8 },
    { nome: 'Ana', notaFinal: 9 },
    { nome: 'José', notaFinal: 5 }
    ];
function exercicio6() {
    let aprovados = [];
    let resultados = '';
    alunos.forEach(function (aluno) {
        if (aluno.notaFinal >= 7) {
            aprovados.push(aluno);
        }
    });
    aprovados.forEach(function (aluno) {
        resultados += `Nome: ${aluno.nome}, Nota: ${aluno.notaFinal}\n`;
    });
    alert(`Aprovados \n${resultados}`);
    console.log(resultados);
}


// 7 - Atualize nosso objeto de alunos, para que ele possua o Nome e Notas. Notas deve ser uma lista de notas que o aluno conseguiu durante o curso. Ao final do programa, apresente o nome de cada aluno e sua média.
btnExecutar7Click = function () {
    exercicio7();
}
 
exercicio7 = function () {
    alunos = [
        { nome: 'João',  notas: [5, 6,  7,  8 ] },
        { nome: 'Maria', notas: [7, 8,  9,  10] },
        { nome: 'Pedro', notas: [8, 9,  10, 10] },
        { nome: 'Ana',   notas: [9, 10, 8,  7 ] },
        { nome: 'José',  notas: [5, 6,  7,  8 ] }
    ]
    let notasString = '';
    let resultados = '';
    let media = 0;
    alunos.forEach(function (aluno) {
        for (let i = 0; i < aluno.notas.length; i++) {
            notasString += aluno.notas[i] + ', ';
            media += parseFloat(aluno.notas[i]);
        }
        aluno.media = media / aluno.notas.length;
        resultados += `Nome: ${aluno.nome}, Notas: ${notasString}Média: ${aluno.media}\n`;
        notasString = '';
        media = 0;
    });
    alert(`Alunos: \n${resultados}`);
    console.log(resultados);
}

// 8 - Crie uma lista de tarefas, ela deve possuir uma descrição e um status (Pendente, Desistido, Concluído). A tarefa deve ter o comportamento de Cumprir e de Desistir. Ao final do programa, apresente a lista de tarefas e seus resultados.

btnExecutar8Click = function () {
    exercicio8();
}

function exercicio8() {
    var tarefas = [
        { descricao: 'Estudar', status: 'Pendente' },
        { descricao: 'Trabalhar', status: 'Pendente' },
        { descricao: 'Lavar a louça', status: 'Pendente' },
        { descricao: 'Fazer compras', status: 'Pendente' }
    ];

    function cumprir(tarefa) {
        tarefa.status = 'Concluído';
    }

    function desistir(tarefa) {
        tarefa.status = 'Desistido';
    }

    let resultados = '';
    tarefas.forEach(function (tarefa) {
        let resposta = confirm('Você já concluiu a tarefa ' + tarefa.descricao + '?');
        if (resposta) {
            cumprir(tarefa);
        } else {
            resposta = confirm('Você quer desistir?');
            if (resposta) {
                desistir(tarefa);
            }
        }
        resultados += `Descrição: ${tarefa.descricao}, Status: ${tarefa.status}\n`;
    });
    alert(`Tarefas: \n${resultados}`);
}

// 9 -Vamos passar a agrupar nossos alunos por turma, então faça os ajustes necessários. Os professores também reclamaram da 
// dificuldade em lançar as notas e o conflito com as materias de outros profs. Dessa forma faça os ajustes necessários para 
// que os professores possam lançar as notas através de uma função lancarNota(materia, prof, nota). Ao final da execução, 
// liste os 3 alunos com notas mais altas em cada turma.

btnExecutar9Click = function () {
    exercicio9();
}

function exercicio9() {
    alunos = [
        { nome: 'João',    turma: 'A', notas: []},
        { nome: 'Maria',   turma: 'A', notas: []},
        { nome: 'Pedro',   turma: 'A', notas: []},
        { nome: 'Ana',     turma: 'B', notas: []},
        { nome: 'José',    turma: 'B', notas: []},
        { nome: 'Marta',   turma: 'B', notas: []},
        { nome: 'Carlos',  turma: 'A', notas: []},
        { nome: 'Beatriz', turma: 'B', notas: []}
    ];

    professores = [
        { nome: 'Ivo',  turma: 'A' },
        { nome: 'Marisa', turma: 'B' },
    ];

    function lancarNota(materia, prof, nota, aluno) {
        if (aluno.turma == prof.turma) {
            aluno.notas.push(parseFloat(nota));
            aluno.materia = materia;
        }
    }

    let professorNome = prompt('Qual o nome do professor?');
    let professor = professores.find(prof => prof.nome === professorNome);
    if (!professor) {
        alert('Professor não encontrado!');
        return;
    }

    let materia = prompt('Qual a matéria?');
    let turma = professor.turma;

    alunos.forEach(function (aluno) {
        if (aluno.turma == turma) {
            let nota = prompt('Qual a nota do aluno: ' + aluno.nome + ' ?');
            lancarNota(materia, professor, nota, aluno);
        }
    });

    function calcularMedia(aluno) {
        let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / aluno.notas.length;
    }

    alunos.forEach(function (aluno) {
        aluno.media = calcularMedia(aluno);
    });

    function top3AlunosPorTurma(turma) {
        return alunos
            .filter(aluno => aluno.turma === turma)
            .sort((a, b) => b.media - a.media)
            .slice(0, 3);
    }

    let resultados = '';
    let top3 = top3AlunosPorTurma(turma);
    resultados += `Turma ${turma}:\n`;
    top3.forEach(function (aluno) {
        resultados += `Nome: ${aluno.nome}, Média: ${aluno.media.toFixed(2)}\n`;
    });
    resultados += '\n';

    alert(`Resultados: \n${resultados}`);
}

btnExecutar1.addEventListener('click', btnExecutar1Click);
btnExecutar2.addEventListener('click', btnExecutar2Click);
btnExecutar3.addEventListener('click', btnExecutar3Click);
btnExecutar4.addEventListener('click', btnExecutar4Click);
btnExecutar5.addEventListener('click', btnExecutar5Click);
btnExecutar6.addEventListener('click', btnExecutar6Click);
btnExecutar7.addEventListener('click', btnExecutar7Click);
btnExecutar8.addEventListener('click', btnExecutar8Click);
btnExecutar9.addEventListener('click', btnExecutar9Click);
