function fuja(){
  var botaoNao = document.getElementById("nao")

  var larguraJanela = window.innerWidth;

  var maxX = larguraJanela - botaoNao.offsetWidth;

  var aleatorioX = Math.floor(Math.random() * maxX);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}