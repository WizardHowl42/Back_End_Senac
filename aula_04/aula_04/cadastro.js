var input = require("readline-sync");
var dadosCadastrais = [];
do{
    var opcao = parseInt(input.question(`Escolha uma opcao: 
    1 - Cadastrar.
    2 - Consultar Clientes.
    3 - Consultor ID.
    4 - Atualizar.
    5 - Excluir.
    Opcao: `));
    switch(opcao){
        case 1:
            var id = input.question("ID : ");
            var nome = input.question("Nome : ");
            var email = input.question("Email : ");
            dadosCadastrais.push([id, nome, email]);
            break;
        case 2 :
            console.log(`Banco de dados cadastrados:`);
            console.table(dadosCadastrais);
            break;
        case 3:
            var consulta = input.question(`Insira o ID desejado.
            ID: `);
            for (var dados in dadosCadastrais){
                if(dadosCadastrais[dados][0] == consulta){
                    console.log(`Cadastro do ID ${consulta}:`);
                    console.table(dadosCadastrais[dados]);
                    break;
                }
            }
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
                    for (var idCadastro in dadosCadastrais){
                        if(dadosCadastrais[idCadastro][0] == idAtualiza){
                            dadosCadastrais[idCadastro][1] = nomeAtualiza;
                        }
                    }
                    break;
                case 2:
                    var emailAtualiza = input.question(`Insira o Email novo: `);
                    for (var idCadastro in dadosCadastrais){
                        if(dadosCadastrais[idCadastro][0] == idAtualiza){
                            dadosCadastrais[idCadastro][2] = emailAtualiza;
                        }
                    }
                    break;
                default:
                    var nomeAtualiza = input.question(`Insira o Nome novo: `);
                    var emailAtualiza = input.question(`Insira o Email novo: `);
                    for (var idCadastro in dadosCadastrais){
                        if(dadosCadastrais[idCadastro][0] == idAtualiza){
                            dadosCadastrais[idCadastro][1] = nomeAtualiza;
                            dadosCadastrais[idCadastro][2] = emailAtualiza;
                        }
                    }
                    break;
                }
            break;
        case 5:
            var idDeleta = input.question(`Insira o ID do cliente.
            ID: `);
            for(var cadastrodeleta in dadosCadastrais){
                if(dadosCadastrais[cadastrodeleta][0] == idDeleta){
                    dadosCadastrais.splice(cadastrodeleta, 1);
                }
            }
            break;
        default:
            console.log("Opcao Invalida.")
            break;
    }
    var continua = input.question("Deseja continuar? [s/n]\n");
}
while(continua == "s");