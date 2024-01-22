alert("Bem vindos ao jogo do Número Secreto");
//parse int para trazer apenas numeros inteiros da função Math.random
//função Math.random traz o numero aleatório, gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo), por isto, usamos +1, caso contrário teriamos no caso deste nosso jogo de 1 a 9, Ex: De 1 a 100, seria: *100 +1, ou teriamos de 1 a 99.
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

 //Leia:Enquanto palpite não for igual ao numeroSecreto//"Estrutura de repetição: laço ou loop"
while (palpite != numeroSecreto) {
    palpite = prompt (`Escolha um número entre 1 e ${numeroMaximo}: `); 
    if(palpite == numeroSecreto) { 
        break;
    } 
        else { 
            if (palpite > numeroSecreto) {
            alert (`O número secreto é menor que ${palpite}.`);
        }
        else { 
            alert (`O número secreto é maior que ${palpite}.`);
        }
        tentativas++; // (+1) ecrementar, seria o mesmo que tentativas= tentativas +1
    }
}
//Operador Ternário|
//Correção da concordância de número "Tentativas"=> Ler: tentativas é maior que 1? , caso tentativas seja > maior que 1 senão será a palavra tentativa, sem o "S"do plural. 
let palavraTentativas= tentativas > 1? "tentativas": "tentativa"; 

alert (`É isso aí!!! O Número Secreto é o " ${numeroSecreto} ",  você acertou com ${tentativas} ${palavraTentativas}`);







 
