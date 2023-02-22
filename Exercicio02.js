/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 2
Foi criado uma classe chamada Pessoa que tem um construtor que recebe um nome e atribui esse nome à propriedade nome da classe.
Além disso, temos um método exibirNome que exibe uma mensagem no console com o nome da pessoa.
Ao criarmos uma nova instância da classe Pessoa e chamarmos o método exibirNome, podemos ver que a mensagem com o nome da pessoa é exibida.
*/

class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
  
    exibirNome() {
      console.log(`Meu nome é ${this.nome}`);
    }
  }
  
  const pessoa = new Pessoa("Bernardo");
  pessoa.exibirNome(); 
