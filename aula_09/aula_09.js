// utilizando o módulo filesystem
const fs = require("fs");

// caminho , formato, função call back

fs.readFile('./arquivos/texto1.txt', 'utf-8', function(erro, data){
    if (erro) throw erro
    console.log(data)
});

// criando um arquivo novo

fs.appendFile('./arquivos/texto2.txt', 'Mensagem de exemplo', function(erro){
    if (erro) throw erro
    console.log("Arquivo criado com sucesso!");
})

fs.writeFile('./arquivos/texto3.txt', 'Segunda mensagem de exemplo', function(erro){
    if (erro) throw erro
    console.log("Arquivo Atualizado");
})

// deletando arquivos

fs.unlink('./arquivos/texto3.txt',function(erro){
    if (erro) throw erro
    console.log("Arquivo apagado!")
})
// renomear arquivos
/*
fs.rename('./arquivos/texto.txt', './arquivos/texto1.txt', function(erro){
    if (erro) throw erro
    console.log('Arquivo renomeado!')
})
*/
