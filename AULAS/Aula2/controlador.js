const readline = require('readline-sync');
const produtos = [];
function criar(){
    const nome = readline.question('Informe o nome do produto:');
    const preco = readline.question('Informe o preco do produto:');
    const novo = {nome, preco};
    produtos.push(novo);
}
function listar(){
    produtos.forEach((produtos) =>
     console.log(produtos.nome,'-', produtos.preco))
}
function buscar(){
    const nome = readline.question('Informe o nome do produto:')
    const buscou = produtos.find((produto) => produto.nome === nome);
    if (buscou){
        console.log(buscou.nome, '-', buscar.preco);
    } else{
        console.log('Produto não encontrado');
    }
}
    function atualizar() {
        const nome = readline.question("Informe o nome do produto: ");
        const buscou = produtos.find((produtos) => produtos.nome === nome);
        if (buscou) {
          const outroNome = 
            readline.question("Informe outro nome para o produto: ");
          const outroPreco = 
            readline.question("Informe outro preco para o produto: ");
          buscou.nome = outroNome;
          buscou.preco = outroPreco;
        } else {
          console.log("Produto não encontrado");
        }
        
      }
      function remover(){
        const nome = readline.question('Informe o nome do produto:')
        const buscou = produtos.findIndex((produtos) => produtos.nome === nome);
        if (posicao >=0){
            produtos.splice(posicao, 1);
        } else{
            console.log('Produto não encontrado');
        }

    }
    
    module.exports = {criar, listar, atualizar, remover};

