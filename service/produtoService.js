import produto_repository from "../repository/produtoRepository.js";

function inserir(produto) {
  if (!produto.nome || produto.preco === undefined) {
    console.log("Produto precisa ter nome e preco definidos!");
    return;
  }
  if (typeof produto.preco !== "number") {
    console.log("Preco precisa ser um numero!");
    return;
  }
  produto_repository.inserir(produto);
}

function listar() {
  return produto_repository.listar();
}

function buscarPorId(id) {
  if (typeof id !== "number" || id === undefined) {
    console.log("id deve ser um numero!");
    return;
  }
  const produto = produto_repository.buscarPorId(id);
  return produto ? produto : "nao ha produtos!";
}

function atualizar(id, produto) {
  if (typeof id !== "number" || id === undefined) {
    console.log("id deve ser um numero!");
    return;
  }
  if (!produto.nome || typeof produto.preco !== "number") {
    console.log("campo nome ou preco precisam existir!");
    return;
  }
  if (!produto_repository.buscarPorId(id)) {
    console.log("produto nao existe!");
    return;
  }

  produto_repository.atualizar(id, produto);
}

function deletar(id) {
  if (typeof id !== "number") {
    console.log("id precisa ser um numero!");
    return;
  }

  if (!produto_repository.buscarPorId(id)) {
    console.log("nao ha produtos!");
    return;
  }

  produto_repository.deletar(id);
}

export default {
  inserir,
  listar,
  buscarPorId,
  atualizar,
  deletar,
};
