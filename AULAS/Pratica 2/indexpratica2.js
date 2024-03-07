const readline = require('readline-sync');
const controlador2 = require('./controlador2');

function menu() {
    console.log('1. Adicionar contato');
    console.log('2. Busacar contato');
    console.log('3. Atualizar contato');
    console.log('4. Listar');
    console.log('5. Remover contato');
}
function escolherOpcao(opcao){
    switch(opcao){
        case '1': 
        controlador2.novoContato();
        break;
        case '2': 
        controlador2.buscar();
        break;
        case '3': 
        controlador2.atualizar();
        break;
        case '4': 
        controlador2.listar();
        break;
        case '5': 
        controlador2.remover();
        break;
        case '6': ProcessingInstruction.exit(0)
        default: console.log('Opção invalida')
    }
    readline.question('Precione Enter para continuar....')


function main(){
    while(true){
        menu();
        const opcao = readline.question('Entre com uma opcao');
        escolherOpcao(opcao);
    }
}
}
main();
  