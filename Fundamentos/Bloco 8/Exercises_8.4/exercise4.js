//Exercício 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  });
}
  
assert.deepStrictEqual(longestNamedBook(), expectedResult);