// Botão voltar ao topo
let topButton = document.getElementById("topButton");

window.onscroll = function () {
  // barra de progresso
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";

  // mostrar botão topo
  if (document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function voltarTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
