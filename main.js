import service from "./service/produtoService.js";

function gerarId() {
  let id = 0;

  return function () {
    id++;
    return id;
  };
}

const getId = gerarId();

const p1 = {
  id: getId(),
  nome: "teclado",
  categoria: "eletronico",
  preco: 20.5,
};

const p2 = {
  id: getId(),
  nome: "teclado gamer",
  categoria: "eletronico",
  preco: 20.8,
};

const p3 = {
  id: getId(),
  // nome: "teclado gamer",
  categoria: "eletronico",
  preco: 20.8,
};

const p4 = {
  id: getId(),
  nome: "teclado gamer",
  categoria: "eletronico",
  // preco: 20.8,
};

const p5 = {
  id: getId(),
  nome: "teclado gamer",
  categoria: "eletronico",
  preco: "20.8",
};

console.log(service.listar());

service.inserir(p2);
service.inserir(p1);
service.inserir(p3);
service.inserir(p4);
service.inserir(p5);

console.log(service.listar());

service.buscarPorId("1");

service.atualizar(1, {});
service.atualizar("2", {});

service.deletar(2);
service.deletar(56);
service.deletar("3");

console.log(service.listar());
