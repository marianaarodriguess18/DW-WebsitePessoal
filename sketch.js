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
        

/*
//-------- MUDAR A COR -------
document.addEventListener('mousemove', function(event) {
  // Obter a posição do mouse em relação à largura e altura da janela
  const mouseX = event.clientX / window.innerWidth;

  //let estiloComputado = getComputedStyle(document.documentElement); // Obtém o estilo computado do elemento desejado

  let novaCor;

  if(mouseX < window.innerWidth/3){
    novaCor= "#62AB91"; //verde
  }

  else if(mouseX > window.innerWidth/3 && mouseX < 2* window.innerWidth/3){
    novaCor= "#CC0066"; //rosa
  }
   else{
    novaCor = "#CCCC00"; //amarelo
  }

  console.log("mouse x:", mouseX, "Nova Cor:", novaCor);
  document.documentElement.style.setProperty('--corprincipal', novaCor);

  /*if(mouseX < window.innerWidth/3){
    let verde = "#62AB91"; //nova cor
    document.body.style.setProperty('--corprincipal', verde); // Define a variável --corprincipal com a nova cor
  }

  if(mouseX > window.innerWidth/3 && mouseX < 2* window.innerWidth/3){
    let rosa = "#CC0066"; //nova cor
    document.body.style.setProperty('--corprincipal', rosa); // Define a variável --corprincipal com a nova cor
  }
  if(mouseX > 2* window.innerWidth/3){
    let amarelo = "#CCCC00"; //nova cor
    document.body.style.setProperty('--corprincipal', amarelo); // Define a variável --corprincipal com a nova cor
    document.documentElement.style.setProperty('--corprincipal', amarelo);
  }
  console.log('Mouse move event captured');*/
//});