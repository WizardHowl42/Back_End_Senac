
// Import da biblioteca

var input = require("readline-sync");

// Variáveis 

var dadosCadastrais = [];

// Funções
function buscaID(bancoDados, ID){
    var index = bancoDados.findIndex(cliente => cliente.id == ID);
    return index;
}

function buscaIDQuestion(bancoDados){
    var ID = input.question(`Insira o ID do cliente.
    ID: `);
    var index = bancoDados.findIndex(cliente => cliente.id == ID);
    return index;
}


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
            var cliente = {  
            id: input.question("ID : "),
            nome: input.question("Nome : "),
            email: input.question("Email : "),
            } 
            dadosCadastrais.push(cliente);
            break;
        case 2 :
            console.log(`Banco de dados cadastrados:`);
            console.table(dadosCadastrais);
            break;
        case 3:
            console.table(dadosCadastrais[buscaIDQuestion(dadosCadastrais)]);
            break;
        case 4:
            var idAtualiza = input.question(`Insira o ID do cliente.
            ID: `);
            var opcaoAtualiza = parseInt(input.question(`Qual opção deseja atualizar: 
            1 - Nome.
            2 - E-mail.
            3 - Nome e E-mail.
            Opcao: `));
            switch(opcaoAtualiza){
                case 1:
                    var nomeAtualiza = input.question(`Insira o Nome novo: `);
                    dadosCadastrais[buscaID(dadosCadastrais,idAtualiza)].nome = nomeAtualiza;
                    break;
                case 2:
                    var emailAtualiza = input.question(`Insira o Email novo: `);
                    dadosCadastrais[buscaID(dadosCadastrais, idAtualiza)].email = emailAtualiza;
                    break;
                default:
                    var nomeAtualiza = input.question(`Insira o Nome novo: `);
                    var emailAtualiza = input.question(`Insira o Email novo: `);
                    dadosCadastrais[buscaID(dadosCadastrais,idAtualiza)].nome = nomeAtualiza;
                    dadosCadastrais[buscaID(dadosCadastrais, idAtualiza)].email = emailAtualiza;
                    }
                    break;
                
            break;
        case 5:
            dadosCadastrais.splice(buscaIDQuestion(dadosCadastrais), 1);
            break;
        default:
            console.log("Opcao Invalida.")
            break;
    }
    var continua = input.question("Deseja continuar? [s/n]\n");
}
while(continua == "s");