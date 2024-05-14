function scrollToTopw() {
  setTimeout(function () {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, 500); // Aguarda 100 milissegundos antes de rolar para o topo
}

// Chama a função após o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", scrollToTopw);
