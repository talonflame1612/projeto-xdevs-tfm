console.log(document.getElementById('btn-avancar'));

//passo 1 identificar o elemenot no html 
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
//passo 2 jeito de identificar o clique do usuario
btnAvancar.addEventListener("click", function(){

    console.log(cartaoAtual);
    console.log(cartoes.length - 1 ) ;
console.log(cartaoAtual === cartoes.length- 1);


    if(cartaoAtual === cartoes.length -1)return;
    //passo 4 buscar o cartao que esta selecionado
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");
//passo 3 fazer aparacer proximo cartao

cartaoAtual++;
console.log(cartaoAtual);
cartoes[cartaoAtual].classList.add("selecionado");

});
//objetivo 2 passo 1  pegar o elemento html da seta voltar 
btnVoltar.addEventListener("click", function(){

    if(cartaoAtual===0 ) return;
  
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

cartaoAtual--;
cartoes[cartaoAtual].classList.add("selecionado");

});
