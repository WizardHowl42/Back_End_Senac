var input = require("readline-sync");

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //Métodos:
    saudacaoes(){
        return "Olá, eu sou " + this.nome + " e tenho " + this.idade + " anos.";
    }

    maiorDeIdade(){
        if(this.idade >= 18 ){
            return 'Sou maior de idade.'
        }else{
            return 'Sou menor de idade.'
        }
    }

}

var nome = input.question('Qual o sei nome? ');
var idade = parseInt(input.question('Qual sua idade? '));
var umaPessoa = new Pessoa(nome, idade);
console.log(umaPessoa.saudacaoes());
console.log(umaPessoa.maiorDeIdade());
