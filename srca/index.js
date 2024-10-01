const fs = require('fs');

function cadastrarCarro(){
    document.getElementById('itemForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        let carros =
        [
            {
                marca: document.getElementById('marca-box').value,
                modelo: document.getElementById('modelo-box').value,
                ano: document.getElementById('ano-box').value,
                nome: document.getElementById('nome-box').value,
                tipo: document.getElementById('tipo-box').value,
                qtAcentos: document.getElementById('qtAcentos-box').value,
                preco: document.getElementById('preco-box').value
            }
        ]

        const response = await fetch('/many/Carro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome, marca: marca, tipo: tipo, modelo: modelo, qtAcentos: qtAcentos, ano: ano, preco: preco }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert('Erro ao salvar o item');
        }
    });
};

async function removerCarro(){
    const id = parseInt(document.getElementById("remove-box").value);
    
    const response = await fetch('/:id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
    });
    
    const result = await response.json();
    if (response.ok) {
        alert(result.message);
    } else {
        alert('Erro ao remover o carro');
    }
};

function alterarCarro() {
    let as = document.getElementById("001");
    let id = parseInt(document.getElementById("id2-box").value);
    let nom = document.getElementById("nom-box").value;
    for (let i = 0; i < carros.carro.length; i++) {
        as.innerHTML(carros.carro[i]);
    };
    let carro = carros.carro.find((carro) => carro.id === id);
    if (carro) {
        carro.nome = nom;
        const jsonAtualizado = JSON.stringify(carros, null, 2);
        fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
        console.log('Nome editado com sucesso!');
    } else {
        console.log('Carro não encontrado.');
    };
};

/*function alterarCarro(){
    let continuar = true;
    let alea = 0;
    while(alea < 7){
        console.log('1- Editar nome');
        console.log('7- Sair');
        alea = parseInt(prompt('Digite uma opção: '));
 
        if(alea === 1){
            for(let i = 0; i < carros.carro.length; i++){
                console.log(carros.carro[i]);
            }
            let id = prompt('Digite o id do carro que você deseja editar:');
            let carro = carros.carro.find((carro) => carro.id === id);
            if(carro) {
                let novoNome = prompt('Digite o novo nome:');
                carro.nome = novoNome;
                const jsonAtualizado = JSON.stringify(carros, null, 2);
                fs.writeFileSync('carros.json', jsonAtualizado, 'utf8');
                console.log('Nome editado com sucesso!');
            } else {
                console.log('carro não encontrado.');
            }
        }
        else if(alea == 7){
            continuar = false;
        }
    }
};*/

function listarCarro(){
    fetch('/api/carros')
    .then(response => response.json())
    .then(data => {
        const id = document.getElementById('listador');
        let html = "<ul>";
        data.forEach(carros => {
            html += `<li>${carros.nome} - ${carros.marca}</li>`;
        });
        html += "</ul>";
        id.innerHTML = html;
    })
    .catch(error => {
        console.error('Erro ao buscar carros:', error);
    });
};

document.addEventListener("DOMContentLoaded", function() {
    cadastrarCarro();
    listarCarro();
});