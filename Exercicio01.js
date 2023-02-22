-/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 1
A classe Pessoa tem uma propriedade nome, uma propriedade idade e um método apresentar().
As classes Aluno e Professor herdam de Pessoa e têm suas próprias propriedades e métodos adicionais.
O método apresentar() em Aluno e Professor sobrescreve o método apresentar() em Pessoa.
*/
// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Classe Aluno
  class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
      super(nome, idade);
      this.matricula = matricula;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Minha matrícula é ${this.matricula}.`);
    }
  }
  
  // Classe Professor
  class Professor extends Pessoa {
    constructor(nome, idade, especialidade) {
      super(nome, idade);
      this.especialidade = especialidade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Minha especialidade é ${this.especialidade}.`);
    }
  }
