let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/*let titulo = document.querySelector("h1"); // O ponto chama a função
titulo.innerHTML= "Jogo do Número Secreto";

let paragrafo =document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre  1 e 10";*/

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2}); /*está no html leitor de texto, para escolha do idioma seguir link do script. rate: define a velocidade da fala*/
}
function exibirMensagemInicial(){
exibirTextoNaTela ("h1","Jogo do Número Secreto");
exibirTextoNaTela ("p","Escolha um número entre  1 e 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1","Acertou!");

        let palavraTentativa = tentativas>1? "tentativas": "tentativa";         
        let mensagemTentativas = `Você acertou o Número Secreto em ${tentativas} ${palavraTentativa}!!!`;
        exibirTextoNaTela ("p", mensagemTentativas);

        document.getElementById ("reiniciar").removeAttribute("disabled"); //ativa o botão Novo jogo
    }   
    else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela ("p","O número secreto é Menor");}
    else { 
        exibirTextoNaTela ("p","O número secreto é Maior");
    } 
    tentativas ++;
    limpaCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10 + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

        if(quantidadeDeElementosDaLista == 10){
            listaDeNumerosSorteados =[];
        }

        if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        }
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }
}

function limpaCampo(){
    chute = document.querySelector("input")
    chute.value ="";
} 
function reiniciarJogo() {
    numeroSecreto= gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}





