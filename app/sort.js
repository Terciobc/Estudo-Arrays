const btnPreco = document.getElementById("btnOrdenarPorPreco");

btnPreco.addEventListener("click", ordenar);

function ordenar() {
  inserirLivros.innerHTML = "";
  let ordemPrecos = livros.sort((a, b) => a.preco - b.preco);
  return exibirLivrosNaTela(ordemPrecos);
}
