// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
// ordem     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
// i         15 14 13 12 11 10 9  8  7  6  5  4  3  2  1  0
// length = 16
//
// i   num  num  soma
//                0
// 0   8    8     8
// 1   0    0     8
// 2   8    8     16
// 3   6    3     19
const validateCred = (arr) => {
  let soma = 0;
  // Começando do dígito mais distante à direita, também conhecido como dígito de verificação, itere para a esquerda.
// console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let num = arr[arr.length - i - 1];
    // console.log(num);
    // Conforme você itera para a esquerda, todos os outros dígitos são duplicados (o dígito verificador não é duplicado). Se o número for maior do que 9 depois de duplicar, subtraia 9 de seu valor.
    if (i % 2 != 0) {
      num = num * 2;
      if (num > 9) {
        num = num - 9;
      }
    }
    // Some todos os dígitos do número do cartão de crédito.
    soma += num;
    // console.log(num);
  }
  // console.log(soma)
  // Se o módulo da soma 10 for 0(se a soma dividida por 10tiver um resto de 0), então o número é válido, caso contrário, é inválido.
  return soma % 10 === 0;
  // retorna true quando arr contém dig de um card valido
  // retorna false quando é invalido (nao deve alterar valores da arr)
};

// console.log(validateCred(valid1));
// console.log(validateCred(invalid1));


// Crie outra função, findInvalidCards()que tenha um parâmetro para uma matriz aninhada de números de cartão de crédito. A função de findInvalidCards()é verificar na matriz aninhada quais números são inválidos e retornar outra matriz aninhada de cartões inválidos.
const findInvalidCards = arr => {
  let resultado = [];
  for ( elemento in arr ){
    if (validateCred(elemento) === false){
      resultado.push(elemento);
    }
  }
  return resultado;
}
//console.log(findInvalidCards);

// Depois de encontrar todos os números de cartão de crédito inválidos, também é necessário identificar as empresas de cartão de crédito que possivelmente emitiram esses números defeituosos. Crie uma função idInvalidCardCompanies()que tenha um parâmetro para uma matriz aninhada de números inválidos e retorne uma matriz de empresas.

// Atualmente, existem 4 empresas aceitas, cada uma com primeiros dígitos exclusivos. A tabela a seguir mostra qual dígito é exclusivo para cada empresa:

// Primeiro dígito  	Companhia
// 3	                Amex (American Express)
// 4	                Visa
// 5	                MasterCard
// 6	                 Descobrir

// Se o número não começar com nenhum dos números listados, imprima uma mensagem como: “Empresa não encontrada”.

// idInvalidCardCompanies()deve retornar uma série de empresas que enviaram cartões com números inválidos. Este array NÃO deve conter duplicatas, ou seja, mesmo que haja dois cartões Visa inválidos, "Visa"deve aparecer apenas uma vez no array.

const idInvalidCardCompanies = arr => {
  let empresas = [];
  // console.log(arr);
  for (let element of arr) {
    // console.log(element[0])
    if (validateCred(element) === false){
      console.log("invalido");
      if (element[0] === 3){
        empresas.push('Amex');
      } else if (element[0] === 4){
        empresas.push('Visa');
      } else if (element[0] === 5) {
        empresas.push('MasterCard');
      } else if (element[0] === 6) {
        empresas.push('Descobrir');
      } else {
        empresas.push('Empresa não encontrada');
      }
    } else {
      console.log("Valido");
    }
  }
  return empresas
}

 console.log(idInvalidCardCompanies(batch));
