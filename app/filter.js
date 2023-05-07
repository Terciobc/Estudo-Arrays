const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrar));

function filtrar() {
  const btnClick = document.getElementById(this.id);
  const categoria = btnClick.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  inserirLivros.innerHTML = "";
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = precoTotal(livrosFiltrados);
    exibirCompraDeTodos(valorTotal);
  }
}
function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirCompraDeTodos(valorTotal) {
  todosOsLivros.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`;
}
