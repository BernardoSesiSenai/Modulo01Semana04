 -/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 5
A função getData é marcada como async e usa await para esperar a resposta da chamada fetch;
Em seguida,foi convertido o corpo da resposta para JSON.
Se a chamada for bem-sucessida, os dados são exibidos no console. 
Se houver um erro, ele será capturado e exibido no console.
*/

async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();
