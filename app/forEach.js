const inserirLivros = document.getElementById("livros");
const todosOsLivros = document.getElementById("valor_total_livros_disponiveis");

function exibirLivrosNaTela(listaDeLivros) {
  todosOsLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    let disponivel =
      livro.quantidade > 0
        ? "livro__titulo disponivel"
        : "livro__titulo indisponivel";
    inserirLivros.innerHTML += `
    
    <div class="livro">
      <img class="${disponivel}"  src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`;
  });
}
