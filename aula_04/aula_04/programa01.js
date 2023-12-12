// Import da biblioteca
var input = require("readline-sync");
var continua = true;
while (continua){
    
    var opcao = parseInt(input.question(`Escolha uma opcao:
    1 - Calculadora de Media.
    2 - Calculadora.
    `));

    switch(opcao){
        case 1:
            var nota1 = parseFloat(input.question("Insira a primeira nota: "));
            var nota2 = parseFloat(input.question("Insira a segunda nota: "));
            var media = (nota1+ nota2)/2;
            console.log(`A media é ${media}.`);
            if(media < 5){
                console.log("Aluno reprovado!");
            }else if(media < 7){
                console.log("Aluno em recuperacao!");
            }else{
                console.log("Aluno aprovado!");
            }
            break;
        case 2:
            var operacao = parseInt(input.question(`Escolha uma operacao:
            1 - Adicao.
            2 - Subtracao.
            3 - Multiplicacao.
            4 - Divisao.
            `));
            var operando1 = parseFloat(input.question("Insira o primeiro operando: "));
            var operando2 = parseFloat(input.question("Insira o segundo operando: "));
            switch(operacao){
                case 1:
                    console.log(`${operando1} + ${operando2} = ${operando1+operando2}`);
                    break;
                case 2:
                    console.log(`${operando1} - ${operando2} = ${operando1-operando2}`);
                    break;
                case 3:
                    console.log(`${operando1} * ${operando2} = ${operando1*operando2}`);
                    break;
                case 4:
                    console.log(`${operando1} / ${operando2} = ${operando1/operando2}`);
                    break;
                default:
                    console.log("Operacao Invalida.");
                    break;
            }
            break;
        default:
            console.log("Opcao invalida.");
            break

    }
    var teste = parseInt(input.question(`Deseja continuar?
    1 - Sim.
    2 - Nao. 
    `));
    if(teste == 1){
        continua = true;
    }else{
        continua = false;
    }
}