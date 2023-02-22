-/*ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 4 - EXERCICIO 6
A função makeRequest retorna uma promisse que, após 1 segundo, resolve com a string "Success!".
A função logData é marcada como async e usa await para esperar a resolução da promisse retornada por makeRequest. 
Quando a promisse é resolvida, a string "Success!" é exibida no console.
*/

function makeRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });
  }
  
  async function logData() {
    const data = await makeRequest();
    console.log(data);
  }
  
  logData(); 
