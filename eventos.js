// GET - pegar/trazer/listar
// POST - subir/adicionar/enviar/criar
// PUT - atualizar/alterar/
// DELETE - apagar/deletar/destruir/remover/aniquilar  

let url = "https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa/";

async function ordenarLista(){
    let ordenar = await fetch(url)
    console.log(ordenar)
    listaNomes = await ordenar.json()
 
    console.log(listaNomes)
}
ordenarLista()

async function addContato(){
    let nome = prompt("Nome ?");
    let idade = prompt("Idade");
    let numero = prompt("numero ?");
    let lista = await fetch(url ,{
        method: "POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            idade: idade,
            numero: numero
        })
    })
    console.log(lista);
    if(lista.ok){
        console.log('adicionei');
        atualizarContatos();
    }
}

async function atualizar(identificador){
    let nomeNovo = prompt("nome ?");
    let idadeNovo = prompt("idade ?");
    let numeroNovo = prompt("número ?");

    let res = await fetch(url + identificador, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nomeNovo,
            idade: idadeNovo,
            numero: numeroNovo
        })
    });
    if(res.ok){
        alert('Atualizou');
        atualizarContatos();
    }else{
        alert('Erro ao atualizar');
    }

}
atualizarContatos();

async function atualizarContatos(){
    let resposta = await fetch(url)
    let body = await resposta.json();
    tarefas.innerHTML = "<ul>"
    body.forEach(pessoa => {
        tarefas.innerHTML += ` 
        <li>${pessoa.nome} - ${pessoa.idade} - ${pessoa.numero}
            <button onclick="deletar(${pessoa.id})">Deletar</button>
            <button onclick="atualizar(${pessoa.id})">Atualizar</button>
        </li>`
    });
    tarefas.innerHTML +=  "</ul>"

    let contador = document.querySelectorAll("li");
  
    let numContatos = document.querySelector("#numContatos");
    
    numContatos.textContent = contador.length;   
}

async function deletar(identificador){
    let res = await fetch(url + identificador, {
        method: 'DELETE',
    });
    if(res.ok){
        atualizarContatos();
    } else{
        console.log(res.statusText);
    }
}