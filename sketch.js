//-------- LINHA -------
document.addEventListener("DOMContentLoaded", function(){
  var isMouseDown = false;
  var palavras = ["design", "football", "family"];
  var palavraIndex = 0;
  var ultima= 0 ;

  document.addEventListener("mousedown",function(event){
    isMouseDown = true;
  });

  document.addEventListener("mouseup", function() {
    isMouseDown = false;
  });

  document.addEventListener("mousemove", function(event) {
    // Move todos os textos conforme o movimento do mouse
    if (isMouseDown) {
      var texto = document.createElement("div");
        texto.className = "linhaTexto";
        texto.textContent = palavras[palavraIndex];
        
        // Posiciona o texto nas coordenadas do movimento do mouse
        texto.style.left = event.clientX + "px";
        texto.style.top = (event.clientY + window.scrollY) + "px";

        // Adiciona o texto ao corpo do documento
        document.body.appendChild(texto);
      
      ajustarPosicao(texto);
    }
    function proximaPalavra(){
    palavraIndex = (palavraIndex + 1)% palavras.length;
    if(texto){
      texto.texContent= palavras[palavraIndex];
    }
  }
  document.addEventListener("click", proximaPalavra);
  });
  

  function ajustarPosicao(texto){
    let textosAnteriores = document.querySelectorAll(".linhaTexto");
    for( let i=0; i<textosAnteriores.length; i++){
      let textoAnterior = textosAnteriores[i];
      let posicaoAtual = parseInt(texto.style.top);
      let posicaoAnterior = parseInt(textoAnterior.style.top);
      let alturaTexto = parseInt (getComputedStyle(texto).height);

      if(posicaoAtual < posicaoAnterior + alturaTexto && posicaoAtual + alturaTexto > posicaoAnterior){
        texto.style.top = posicaoAnterior + alturaTexto + "px";
      }
    }
  }
  

  let botaoApagar = document.getElementById("apagar");
  
  botaoApagar.addEventListener("click", function(){
    let textos = document.querySelectorAll(".linhaTexto");
    textos.forEach ( function(texto){
      texto.remove();
    });
  });
  
});
  

function mudaCor(){ //amarelo
  document.documentElement.style.setProperty('--corprincipal', '#62AB91');
}
function mudaCor1(){ //beje
  document.documentElement.style.setProperty('--corprincipal', '#CCCC00');
}
function mudaCor2(){ //verde
  document.documentElement.style.setProperty('--corprincipal', '#CBBBA0');
}
