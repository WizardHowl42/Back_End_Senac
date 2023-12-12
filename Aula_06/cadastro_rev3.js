// Import da biblioteca
import {cadastrar, consultaGeral, consultaId, atualiza, exclui} from  "./cadastro_module.js";
import { question } from "readline-sync";
// Variáveis 
var dadosCadastrais = [];

do{
    var opcao = parseInt(question(`Escolha uma opcao: 
    1 - Cadastrar.
    2 - Consultar Clientes.
    3 - Consultar ID.
    4 - Atualizar.
    5 - Excluir.
    Opcao: `));
    switch(opcao){
        case 1:
            cadastrar(dadosCadastrais);
            break;
        case 2 :
            consultaGeral(dadosCadastrais);
            break;
        case 3:
            consultaId(dadosCadastrais);
            break;
        case 4:
            atualiza(dadosCadastrais); 
            break;
        case 5:
            exclui(dadosCadastrais);
            break;
        default:
            console.log("Opcao Invalida.")
            break;
    }
    var continua = question("Deseja continuar? [s/n]\n");
}
while(continua == "s");