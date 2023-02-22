-/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 4
*/

const promise = new Promise((resolve, reject) => {
  //Vamos simular uma operação que demora 2 segundos para completar:
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    
    if (randomNumber < 5) {
      // Se o número for menor que 5, a promisse é resolvida com sucesso e retorna o número.
      resolve(randomNumber);
    } else {
      // Se o número for maior ou igual a 5, a promisse é rejeitada e retorna uma mensagem de erro.
      reject("O número gerado é maior ou igual a 5.");
    }
  }, 2000);
});

promise.then((result) => {
  console.log(`A Promessa foi resolvida com o número ${result}.`);
}).catch((error) => {
  console.error(`A Promessa foi rejeitada com o erro: ${error}`);
}); 
