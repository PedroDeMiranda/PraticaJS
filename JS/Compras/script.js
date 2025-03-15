const btnAddItem = document.getElementById('btnAddItem');

    function addItem() {
        let nome = document.getElementById('nome').value;
        let descricao = document.getElementById('descricao').value;
        let quantidade = document.getElementById('quantidade').value;
        let aside = document.getElementsByTagName('aside');
        let item = document.createElement("section");
        item.innerHTML = `<h2>${nome}</h2><p>${descricao}</p><p>${quantidade}</p>`
        aside.appendChild(item);
    }

    btnAddItem.addEventListener('click', addItemClick);
