async function getBooks() {
  // const url = process.env.FIREBASE_URL
  const url = 'https://next-js-29f86-default-rtdb.firebaseio.com/books.json'
  const response = await fetch(url)
  const data = await response.json()

  return data
}

async function getBookFromId(id) {
  const books = await getBooks()
  const book = books.find(book => book.id === id)

  return book
}

export { getBooks, getBookFromId }
