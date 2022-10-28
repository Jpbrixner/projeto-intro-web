//# PROJETO DE INTRODUÇÃO AO DESENVOLVIMENTO WEB

//==================================================================================================================
//SEMANA 1

//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas.

/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
* uma característica String;
* uma característica Number;
* uma característica Boolean; 

RESPOSTA:
const filme = String
const duracao = Number
const venceuOscar = Boolean */

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const filme1 = "Gladiador";
const duracao1 = 155;
const venceuOscar1 = true;

const filme2 = "O Resgate do Soldado Ryan";
const duracao2 = 169;
const venceuOscar2 = true;

const filme3 = "O Patriota";
const duracao3 = 175;
const venceuOscar3 = false;

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaDuracao = (duracao1 + duracao2 + duracao3) / 3;
console.log(mediaDuracao);

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificarVenceuOscar = venceuOscar1 && venceuOscar2 && venceuOscar3;
console.log(verificarVenceuOscar);

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const elenco1 = [
  "Russell Crowe",
  "Joaquin Phoenix",
  "Connie Nielsen",
  "Oliver Reed",
  "Derek Jacobi",
  "Djimon Hounsou",
  "Richard Harris",
];
const elenco2 = [
  "Tom Hanks",
  "Tom Sizemore",
  "Matt Damon",
  "Edward Burns",
  "Barry Pepper",
  "Vin Diesel",
];
const elenco3 = [
  "Mel Gibson",
  "Heath Ledger",
  "Joely Richardson",
  "Jason Isaacs",
  "Chris Cooper",
];

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS.

console.log(
  `Filme: ${filme1.toUpperCase()}\nDuração: ${duracao1} min \nVencedor de Oscar?: ${venceuOscar1}\nElenco: ${elenco1}`
);
console.log(
  `Filme: ${filme2.toUpperCase()}\nDuração: ${duracao2} min \nVencedor de Oscar?: ${venceuOscar2}\nElenco: ${elenco2}`
);
console.log(
  `Filme: ${filme3.toUpperCase()}\nDuração: ${duracao3} min \nVencedor de Oscar?: ${venceuOscar3}\nElenco: ${elenco3}`
);

//==================================================================================================================
//SEMANA 2

//1. Transforme os itens que criamos nas últimas semanas em objetos.

const objetoFilme1 = {
  filme: "Gladiador",
  duracao: 155,
  venceuOscar: true,
  elenco: [
    "Russell Crowe",
    "Joaquin Phoenix",
    "Connie Nielsen",
    "Oliver Reed",
    "Derek Jacobi",
    "Djimon Hounsou",
    "Richard Harris",
  ],
};
const objetoFilme2 = {
  filme: "O Resgate do Soldado Ryan",
  duracao: 169,
  venceuOscar: true,
  elenco: [
    "Tom Hanks",
    "Tom Sizemore",
    "Matt Damon",
    "Edward Burns",
    "Barry Pepper",
    "Vin Diesel",
  ],
};
const objetoFilme3 = {
  filme: "O Patriota",
  duracao: 175,
  venceuOscar: false,
  elenco: [
    "Mel Gibson",
    "Heath Ledger",
    "Joely Richardson",
    "Jason Isaacs",
    "Chris Cooper",
  ],
};

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const arrayFilmes = [];

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

arrayFilmes.push(objetoFilme1, objetoFilme2, objetoFilme3);

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

const arrayFilmesOscar = [];

if (objetoFilme1.venceuOscar) {
  arrayFilmesOscar.push(objetoFilme1);
} else {
  console.log(alert("Filme 1 não adicionado"));
}

if (objetoFilme2.venceuOscar) {
  arrayFilmesOscar.push(objetoFilme2);
} else {
  console.log(alert("Filme 2 não adicionado"));
}

// Para não aparecer o alert na tela eu comentei esse:
// if (objetoFilme3.venceuOscar) {
//   arrayFilmesOscar.push(objetoFilme3);
// } else {
//   console.log(alert("Filme 3 não adicionado"));
// }

//==================================================================================================================
//SEMANA 3

//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

const novoFormatoElenco = arrayFilmes.map((filme) => {
  return { ...filme, elenco: filme.elenco.toString() };
});
console.log(novoFormatoElenco);

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

/*const objetoTeste = {
  filme:"Exemplo",
  duracao: 120
}
arrayFilmes.push(objetoTeste)*/

for (let objeto of arrayFilmes) {
  for (let propriedade in objeto) {
    console.log(`${propriedade}: ${objeto[propriedade]}`);
  }
}

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

const objetoEmString = function objetoString(objeto) {
  let filmeString = "";
  for (propriedade in objeto) {
    filmeString += `${propriedade}:${objeto[propriedade]} `;
  }
  console.log(filmeString);
  return filmeString;
};

objetoEmString(objetoFilme1);

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

const objetoFilter = (array, string) => {
  const titulo = array.filter((objeto) => objeto.filme === string);

  if (titulo.length === 0) {
    alert("Nenhum filme encontrado!");
  } else {
    console.log(titulo);
  }
  return titulo;
};

objetoFilter(arrayFilmes, "Gladiador");

//==================================================================================================================
//SEMANA 4
//ARQUIVO INDEX.HTML

//==================================================================================================================
//SEMANA 5
//ARQUIVO STYLE.CSS

//==================================================================================================================
//SEMANA 6

//1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.

//Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista interação entre HTML e CSS e o Script que criamos. A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir do nosso código JS. Para isso, devemos manipular os objetos do HTML e do CSS utilizando o DOM.

function adicionarFilmes(objeto, id) {
  for (i in objeto) {
    let filme = document.getElementById(id);
    let infoCard = document.createElement("li");
    filme.appendChild(infoCard);
    infoCard.innerHTML = objeto[i];
  }
}

adicionarFilmes(objetoFilme1, "infoCard1");
adicionarFilmes(objetoFilme2, "infoCard2");
adicionarFilmes(objetoFilme3, "infoCard3");

//2. Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um campo no input e apertar o botão, apenas os itens com nome igual ao da busca sejam renderizados na tela.

function buscarFilme() {
  let input = document.getElementById("input").value;
  input = input.toUpperCase();
  let card = document.getElementsByClassName("cardFilme");

  for (i = 0; i < card.length; i++) {
    if (!card[i].innerHTML.toUpperCase().includes(input)) {
      card[i].style.display = "none";
    } else {
      card[i].style.display = "inherit";
    }
  }
  if (input === "") {
    alert("Digite o nome de um filme");
  }
}
