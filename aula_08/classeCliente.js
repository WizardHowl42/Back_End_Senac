var input = require("readline-sync");


class Cliente{
    constructor(id, nome, email){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    atualizar(){
        var opcaoAtualiza = parseInt(input.question(`Qual opção deseja atualizar: 
        1 - Nome.
        2 - E-mail.
        3 - Nome e E-mail.
        Opcao: `));
        switch(opcaoAtualiza){
            case 1:
                var nomeAtualiza = input.question(`Insira o Nome novo: `);
                this.nome = nomeAtualiza;
                break;
            case 2:
                var emailAtualiza = input.question(`Insira o Email novo: `);
                this.email = emailAtualiza;
                break;
            default:
                var nomeAtualiza = input.question(`Insira o Nome novo: `);
                var emailAtualiza = input.question(`Insira o Email novo: `);
                this.nome = nomeAtualiza;
                this.email = emailAtualiza;
                break;
        }

    }

}

class BancoDados{
    constructor(){
        this.clientes = [];  
    }
    // this.clientes = [];
    
    buscaId(id){
        var index = this.clientes.findIndex(cliente => cliente.id == id);
        return index;
    }
    buscaIdQuestion(){
        var id = input.question(`Insira o ID do cliente.
        ID: `);
        var index = this.clientes.findIndex(cliente => cliente.id == id);
        return index;
    }
    cadastrar(){
        var novoCliente = {
            id: input.question("ID : "),
            nome: input.question("Nome : "),
            email: input.question("Email : "),
            };
        this.clientes.push(new Cliente(novoCliente.id,novoCliente.nome, novoCliente.email));
    }
    consultarClientes(){
        console.log(`Banco de dados cadastrados:`);
        console.table(this.clientes);
    }
    consultarId(){
        console.table(this.clientes[this.buscaIdQuestion()]);
    }
    atualizar(){
        var idAtualiza = input.question(`Insira o ID do cliente.
        ID: `);
        this.clientes[this.buscaId(idAtualiza)].atualizar();
    }
    excluir(){
        this.clientes.splice(this.buscaIdQuestion(), 1);
    }
}
module.exports = {BancoDados}