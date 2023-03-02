export const books = [
  {
    id: 1,
    name: 'The Hobbit',
    description:
      'The Hobbit, or There and Back Again is a childrens fantasy novel by English author J. R. R. Tolkien.',
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    description:
      'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
  },
  {
    id: 3,
    name: 'The Silmarillion',
    description:
      'The Silmarillion is an unfinished valkryie fantasy by J. R. R. Tolkien.',
  },
  {
    id: 4,
    name: 'Sherk',
    description:
      'Shrek is a 2001 American computer-animated fantasy comedy film.',
  },
]

export const fetchBooksFromId = id => {
  id = +id
  const book = books.find(book => {
    return book.id === id
  })
  return book
}
