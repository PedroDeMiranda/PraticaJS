const btnAddItem = document.getElementById('addItem');
const btnLimpa = document.getElementById('limpar');
const btnMudaCorTitulo = document.getElementById('mudaCorTitulo');
const btnMudaDescricao = document.getElementById('mudaDesc');
const btnExecutar = document.getElementById('executar');

function btnAddItemClick() {
    addItem();
}

addItems = () => {
    let item = document.createElement('p');
}

btnAddItem.addEventListener('click', addItem);
btnLimpa.addEventListener('click', limpar);
btnMudaCorTitulo.addEventListener('click', mudaCorTitulo);
btnMudaDescricao.addEventListener('click', mudaDescricao);
btnExecutar.addEventListener('click', executar);