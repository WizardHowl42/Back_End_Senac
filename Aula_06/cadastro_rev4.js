// Import da biblioteca
var funcoes = require("./cadastro_module2.js");
var input = require("readline-sync");
// Variáveis 
var dadosCadastrais = [];

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
            funcoes.cadastrar(dadosCadastrais);
            break;
        case 2 :
            funcoes.consultaGeral(dadosCadastrais);
            break;
        case 3:
            funcoes.consultaId(dadosCadastrais);
            break;
        case 4:
            funcoes.atualiza(dadosCadastrais); 
            break;
        case 5:
            funcoes.exclui(dadosCadastrais);
            break;
        default:
            console.log("Opcao Invalida.")
            break;
    }
    var continua = input.question("Deseja continuar? [s/n]\n");
}
while(continua == "s");