var input = require("readline-sync");


// funções internas:
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

// Funções para tratameno dos cadastros:

function cadastrar (bancoDados){
    var cliente = {
        id: input.question("ID : "),
        nome: input.question("Nome : "),
        email: input.question("Email : "),
        };
    return bancoDados.push(cliente);
}

function consultaGeral (bancoDados){
    console.log(`Banco de dados cadastrados:`);
    console.table(bancoDados);
}

function consultaId (bancoDados){
    console.table(bancoDados[buscaIDQuestion(bancoDados)]);
}

function atualiza (bancoDados){
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
            bancoDados[buscaID(bancoDados,idAtualiza)].nome = nomeAtualiza;
            break;
        case 2:
            var emailAtualiza = input.question(`Insira o Email novo: `);
            bancoDados[buscaID(bancoDados, idAtualiza)].email = emailAtualiza;
            break;
        default:
            var nomeAtualiza = input.question(`Insira o Nome novo: `);
            var emailAtualiza = input.question(`Insira o Email novo: `);
            bancoDados[buscaID(bancoDados,idAtualiza)].nome = nomeAtualiza;
            bancoDados[buscaID(bancoDados, idAtualiza)].email = emailAtualiza;
            break;
    }
}

function exclui (bancoDados){
    return bancoDados.splice(buscaIDQuestion(bancoDados), 1);
}

module.exports = {cadastrar, consultaGeral, consultaId, atualiza, exclui};