async function getBooks() {
  const res = await fetch(
    'https://next-js-29f86-default-rtdb.firebaseio.com/books.json',
  )
  const data = await res.json()
  return data
}

async function fetchBooksFromId(id) {
  const books = await getBooks()
  const book = books.find(book => book.id === id)
  return book
}

export { getBooks, fetchBooksFromId }
