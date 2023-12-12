//Classes:
class Animal{
    constructor(nome){
        this.nome = nome;
    }
    //Métodos:
    fazerBarulho(){
        console.log('Barulho genérico!');
    }
}

var meuAnimal = new Animal('Milu');
console.log(meuAnimal.nome);
meuAnimal.fazerBarulho();