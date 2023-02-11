/*
Não é incomum que queiramos encadear funções em arrays para que possamos chegar a um resultado de forma menos “verbosa”, isto é, sem ter que escrever muito código.

Dito isto, foi solicitado a você que você escreve um algoritmo que pegue todas as médias dos alunos do array:

Some todas elas e divida pelo número de alunos, e isto deve ser feito em uma única linha de código.

*/

const alunos = [
    {
        nome: 'Luis Carlos Elias',
        mediaFinal: 7.0,
    },
{
        nome: 'Juliana Silva',
        mediaFinal: 8.5,
    },
{
        nome: 'Pedro Pascal',
        mediaFinal: 5.5,
    },
{
        nome: 'Ana Santos',
        mediaFinal: 6.5,
    }
];


let test = alunos.reduce((acumulador, item) => { return acumulador + item.mediaFinal / 4;},0);
  
console.log('media:',test)
      
   
