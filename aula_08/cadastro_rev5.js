var input = require("readline-sync");
var classe = require("./classeCliente.js");

// Objetos: 
var dadosCadastrais = new classe.BancoDados();

do{
    var opcao = parseInt(input.question(`Escolha uma opcao: 
    1 - Cadastrar.
    2 - Consultar Clientes.
    3 - Consultar ID.
    4 - Atualizar.
    5 - Excluir.
    Opcao: `));
    switch(opcao){
        case 1:
            dadosCadastrais.cadastrar();
            break;
        case 2 :
            dadosCadastrais.consultarClientes();
            break;
        case 3:
            dadosCadastrais.consultarId();
            break;
        case 4:
            dadosCadastrais.atualizar(); 
            break;
        case 5:
            dadosCadastrais.excluir();
            break;
        default:
            console.log("Opcao Invalida.")
            break;
    }
    var continua = input.question("Deseja continuar? [s/n]\n");
}
while(continua == "s");