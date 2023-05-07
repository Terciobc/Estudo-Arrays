// Arquivo para requisitar livros

let livros = [];

const endPointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

buscarLivrosDaApi();

async function buscarLivrosDaApi() {
  const res = await fetch(endPointDaApi);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livros);
}
