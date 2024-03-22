const readline = require('readline-sync');

class Contatos {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

const contatos = [];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contatos(nome, email, telefone);
    contatos.push(novoContato);
}

function buscar() {
    const nomeContato = readline.question('Informe o nome:');
    const encontrado = contatos.find(contato => contato.nome === nomeContato);
    if (encontrado) {
        console.log(encontrado.nome, '-', encontrado.email, '-', encontrado.telefone);
    } else {
        console.log('Contato não encontrado');
    }
}
function atualizar() {
    const nome = readline.question("Informe o nome que deseja atualizar: ");
    const buscou = contatos.find((contato) => contato.nome === nome);
    if (buscou) {
      const outroNome = 
        readline.question("Informe outro nome para o contato: ");
      const outroTefone = 
        readline.question("Informe outro telefone para o contato: ");
        const outroEmail =
        readline.question('Informe novo email:')

      buscou.nome = outroNome;
      buscou.telefone = outroTefone;
      buscou.email = outroEmail
    } else {
      console.log("Contato não encontrado");
    }
  
  }
  function listar() {
    const listar = readline.question
    produtos.forEach((nome,telefone,email) =>
    console.log(nome,'-', telefone,'-',email))


  function remover(){
    const nome = readline.question('Informe o nome do produto:')
        const buscou = produtos.findIndex((produtos) => produtos.nome === nome);
        if (posicao >=0){
            produtos.splice(posicao, 1);
        } else{
            console.log('Produto não encontrado');
        }
  }
  }
  module.exports = {listar, atualizar, remover};

