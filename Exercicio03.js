-/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 3
Foi criado uma classe chamada Calculadora que tem um método estático chamado somar.
O método estático é acessado diretamente pela classe, sem precisar criar uma instância dela.

Também acessei o método somar da classe Calculadora e passamos dois números como argumentos.
O resultado da soma é então exibido no console.
*/
class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  }
  
  console.log(Calculadora.somar(1, 2)); 
