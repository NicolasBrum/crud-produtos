const produtos = [];

function inserir(produto) {
  produtos.push(produto);
}

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find((p) => p.id === id);
}

function atualizar(id, produto) {
  produtos.map((p) => {
    if (p.id === id) {
      p.nome = produto.nome;
      p.categoria = produto.categoria;
      p.preco = produto.preco;
    }
  });
}

function deletar(id) {
  const index = produtos.findIndex((p) => p.id === id);
  if (index !== -1) produtos.splice(index, 1);
}

function buscarPorCategoria(categoria) {
  return produtos.filter((p) => p.categoria === categoria);
}

function buscarPorNome(nome) {
  const regex = new RegExp(nome);
  return produtos.filter((p) => regex.test(p.nome));
}
export default {
  inserir,
  listar,
  buscarPorId,
  atualizar,
  deletar,
  buscarPorCategoria,
  buscarPorNome,
};
