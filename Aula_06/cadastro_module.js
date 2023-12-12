// Módulo para tratamento de cadastros
import { question } from "readline-sync";


// funções internas:
function buscaID(bancoDados, ID){
    var index = bancoDados.findIndex(cliente => cliente.id == ID);
    return index;
}

function buscaIDQuestion(bancoDados){
    var ID = question(`Insira o ID do cliente.
    ID: `);
    var index = bancoDados.findIndex(cliente => cliente.id == ID);
    return index;
}

// Funções para tratameno dos cadastros:

function cadastrar (bancoDados){
    var cliente = {
        id: question("ID : "),
        nome: question("Nome : "),
        email: question("Email : "),
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
    var idAtualiza = question(`Insira o ID do cliente.
    ID: `);
    var opcaoAtualiza = parseInt(question(`Qual opção deseja atualizar: 
    1 - Nome.
    2 - E-mail.
    3 - Nome e E-mail.
    Opcao: `));
    switch(opcaoAtualiza){
        case 1:
            var nomeAtualiza = question(`Insira o Nome novo: `);
            bancoDados[buscaID(bancoDados,idAtualiza)].nome = nomeAtualiza;
            break;
        case 2:
            var emailAtualiza = question(`Insira o Email novo: `);
            bancoDados[buscaID(bancoDados, idAtualiza)].email = emailAtualiza;
            break;
        default:
            var nomeAtualiza = question(`Insira o Nome novo: `);
            var emailAtualiza = question(`Insira o Email novo: `);
            bancoDados[buscaID(bancoDados,idAtualiza)].nome = nomeAtualiza;
            bancoDados[buscaID(bancoDados, idAtualiza)].email = emailAtualiza;
            break;
    }
}

function exclui (bancoDados){
    return bancoDados.splice(buscaIDQuestion(bancoDados), 1);
}

export {cadastrar, consultaGeral, consultaId, atualiza, exclui};