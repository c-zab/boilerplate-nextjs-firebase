async function getBooks() {
  const res = await fetch(
    'https://next-js-29f86-default-rtdb.firebaseio.com/books.json',
  )
  const data = await res.json()
  return data
}

export { getBooks }
